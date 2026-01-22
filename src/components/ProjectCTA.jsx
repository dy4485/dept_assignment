import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the button icon
import CTA from "../assets/CTA.png";

const ProjectCTA = () => {
  return (
    <section className="w-full bg-[#051133] py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: 3D Illustration Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
             {/* Replace this img src with your actual 3D asset path */}
            <img 
              src={CTA} 
              alt="Project Illustration" 
              className="w-full h-auto object-contain"
            />
            {/* Fallback decorative shape if image is missing during dev */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Have a project idea!<br />
            Let’s work together.
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Leading digital agency with solid design and development 
            expertise. We build readymade websites, mobile 
            applications, and elaborate online business services.
          </p>

          <button className="group flex items-center gap-2 bg-[#1d61e7] hover:bg-[#1650c5] transition-colors text-white font-medium px-8 py-4 rounded-lg">
            Let's Work Together
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectCTA;