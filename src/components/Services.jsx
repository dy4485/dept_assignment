import React from "react";
import ServiceCard from "./ServiceCard";

import uiux from "../assets/service-uiux.png";
import mobile from "../assets/service-mobile.png";
import frontend from "../assets/service-web.png";
import headerIcon from "../assets/service-header.png";

export default function Services() {
  return (
    <section className="px-6 md:px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          
          {/* Left: 3D Illustration */}
          <div className="w-full md:w-[25%] flex justify-start">
            <div className="w-48 h-48 lg:w-56 lg:h-56">
              <img 
                src={headerIcon} 
                alt="UI Kit Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Center: Main Headline */}
          <div className="w-full md:w-[45%]">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#051133] leading-[1.2] tracking-tight text-center md:text-left">
              Beautiful UI kit designed to grow your business.
            </h2>
          </div>

          {/* Right: Description Text */}
          <div className="w-full md:w-[25%] flex items-end">
            <p className="text-[#64748b] text-base md:text-md leading-relaxed font-medium text-center md:text-left border-l-0 md:border-l-2 border-gray-100 md:pl-6">
              Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.
            </p>
          </div>
        </div>

        {/* Bottom: Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <ServiceCard
            icon={uiux}
            title="UI/UX Design"
            desc="Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque."
            bg="bg-[#F0F7FF]" // Light blue tint
          />

          <ServiceCard
            icon={mobile}
            title="Mobile App Design"
            desc="Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque."
            bg="bg-[#FFF0F6]" // Light pink tint
          />

          <ServiceCard
            icon={frontend}
            title="Front-end Development"
            desc="Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque."
            bg="bg-[#F8FAFC]" // Light gray tint
          />
        </div>

      </div>
    </section>
  );
}