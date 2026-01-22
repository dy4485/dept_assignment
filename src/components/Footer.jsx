import React from 'react';

const Footer = () => {
  const footerLinks = {
    "QUICK LINKS": ["Portfolio", "About", "Services", "Pricing Plans", "Contact"],
    "SERVICES": ["UI/UX Design", "Branding", "Illustration", "Design Concept", "App Design"],
    "PRODUCT": ["Figma", "Adobe", "Dribbble", "Behance", "Themeforest"]
  };

  return (
    <footer className="w-full bg-[#f8fafc] pt-16 pb-8 px-6 text-[#64748b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-200 pb-16">
        
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-[#2563eb] p-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1e293b]">Golio</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            We build readymade websites, mobile applications, and elaborate online business services.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold">Light Mode</span>
            <div className="w-10 h-5 bg-[#2563eb] rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs">Dark Mode</span>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-[#1e293b] font-bold text-sm mb-6 tracking-wider">{title}</h4>
            <ul className="space-y-4 text-sm">
              {links.map((link) => (
                <li key={link} className="hover:text-[#2563eb] cursor-pointer transition-colors flex items-center gap-2">
                  {link === "Portfolio" && <span className="w-4 h-[2px] bg-[#2563eb]"></span>}
                  <span className={link === "Portfolio" ? "text-[#2563eb] font-semibold" : ""}>{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media Section */}
        <div className="space-y-3">
          <SocialButton color="bg-[#eef2ff]" textColor="text-[#4267B2]" label="Facebook" icon="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          <SocialButton color="bg-[#0077b5]" textColor="text-white" label="Linkedin" icon="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" isLinkedIn />
          <SocialButton color="bg-[#e0f2fe]" textColor="text-[#1DA1F2]" label="Twitter" icon="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          <SocialButton color="bg-[#fdf2f8]" textColor="text-[#E1306C]" label="Instagram" icon="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.23 2a1.23 1.23 0 110-2.46 1.23 1.23 0 010 2.46z" />
        </div>
      </div>

      <div className="text-center pt-8 text-xs font-medium text-[#1e293b]">
        © 2021 - Golio UI Kit
      </div>
    </footer>
  );
};

const SocialButton = ({ color, textColor, label, icon, isLinkedIn }) => (
  <div className={`${color} ${textColor} flex items-center justify-between px-4 py-2 rounded-md cursor-pointer hover:opacity-90 transition-opacity`}>
    <div className="flex items-center gap-3">
      <svg className="w-5 h-5" fill={isLinkedIn ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {isLinkedIn ? <path d={icon} fill="currentColor" stroke="none" /> : <path d={icon} strokeLinecap="round" strokeLinejoin="round" />}
        {isLinkedIn && <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />}
      </svg>
      <span className="text-xs font-bold border-l border-black/10 pl-3">{label}</span>
    </div>
  </div>
);

export default Footer;