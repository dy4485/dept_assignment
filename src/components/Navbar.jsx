export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-white font-bold">
         <svg  className="text-white" width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.097 1.00008L1.821 14.4941C1.261 15.3061 0.981001 15.7121 1.001 16.0501C1.00787 16.1953 1.04632 16.3373 1.11368 16.4661C1.18104 16.595 1.27567 16.7076 1.391 16.7961C1.661 17.0001 2.151 17.0001 3.139 17.0001H11.097V27.0001L20.373 13.5061C20.933 12.6941 21.213 12.2881 21.193 11.9501C21.1861 11.8049 21.1477 11.6629 21.0803 11.534C21.013 11.4052 20.9183 11.2926 20.803 11.2041C20.533 11.0001 20.043 11.0001 19.055 11.0001H11.097V1.00008Z" fill="#0B63E5" stroke="#0B63E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <span className="text-xl font-bold text-gray-900">Golio</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600">
        <li className="text-blue-600 font-medium">Home</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Testimonial</li>
        <li>Pricing Plan</li>
        <li>FAQs</li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="hidden md:block px-4 py-2 rounded-md bg-blue-50 text-blue-600">
          Contact
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
          Request A Quote
        </button>
      </div>

    </nav>
  );
}
