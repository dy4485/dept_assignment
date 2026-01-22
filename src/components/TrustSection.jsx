import React from 'react';

const TrustSection = () => {
  // Array of logo data for easy maintenance
  const logos = [
    { name: 'Lenovo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg', width: 'w-24' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', width: 'w-20' },
    { name: 'YouTube', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg', width: 'w-24' },
    { name: 'Slack', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', width: 'w-8', hasText: true },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', width: 'w-28' },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Left Text Side */}
        <div className="text-center md:text-left shrink-0">
          <h2 className="text-[#1e293b] text-xl md:text-2xl font-semibold leading-tight">
            Trusted by <span className="text-[#2563eb]">17k+</span> world<br />
            largest business company.
          </h2>
        </div>

        {/* Right Logos Side */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80">
          {/* Lenovo */}
          <img src={logos[0].url} alt="Lenovo" className="h-6 md:h-8 object-contain" />
          
          {/* Amazon */}
          <img src={logos[1].url} alt="Amazon" className="h-6 md:h-8 mt-2 object-contain" />
          
          {/* YouTube */}
          <img src={logos[2].url} alt="YouTube" className="h-5 md:h-6 object-contain" />
          
          {/* Slack (Logo + Text combo) */}
          <div className="flex items-center gap-2">
            <img src={logos[3].url} alt="Slack" className="h-6 md:h-7" />
            <span className="font-bold text-2xl tracking-tighter text-black">slack</span>
          </div>
          
          {/* Microsoft */}
          <img src={logos[4].url} alt="Microsoft" className="h-6 md:h-7 object-contain" />
        </div>
        
      </div>
    </section>
  );
};

export default TrustSection;