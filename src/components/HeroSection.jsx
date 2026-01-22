import hero from "../assets/home-img.jpg";

const HeroSection = () => {
  

  return (
    <section className="relative pt-20 pb-32 overflow-hidden px-4 md:px-20">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 z-10">
        <h1 className="text-4xl md:text-[80px] font-black leading-[1.1] tracking-tight mb-8">
          The easiest way to <br /> create your website.
        </h1>
        <p className="text-md text-slate-500 mb-10 max-w-lg leading-relaxed">
          Zakirsoft gives you everything you need to create your website in minutes. 
          Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.
        </p>
        
        <div className="grid grid-cols-2 gap-y-4 mb-12">
          {["It's Simple, Easy to Use", "Well-organized Figma File.", "Available with React & Nuxt.JS", "Lifetime Access"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-500">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-sm text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 relative">
          <button className="bg-[#1E62E6] text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transition-all">Get Started</button>
          <button className="bg-[#F0F5FF] text-[#1E62E6] px-10 py-4 rounded-lg font-bold hover:bg-blue-100 transition-all">View Preview</button>
          
          
        </div>
      </div>
      
      <div className="lg:w-1/2 mt-15 lg:mt-0">
        <img src={hero} alt="3D Character" className="w-full scale-110" />
      </div>
    </div>
  </section>
  );
};

export default HeroSection;