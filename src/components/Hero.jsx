import hero from "../assets/home-img.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
      
      {/* Left Content */}
      <div className="max-w-xl p-45">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The easiest way to <br /> create your website.
        </h1>

        <p className="mt-5 text-gray-600">
          Zakirsoft gives you everything you need to create your website in minutes.
          Bootstrap code with a well-organized Figma file.
        </p>

        {/* Features */}
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-green-600">
          <li>✔ It’s Simple, Easy to Use</li>
          <li>✔ Well-organized Figma File</li>
          <li>✔ Available with React & Next.js</li>
          <li>✔ Lifetime Access</li>
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
            Get Started
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md">
            View Preview
          </button>
        </div>
      </div>

      {/* Right Image */}
      <img
        src={hero}
        alt="Hero Illustration"
        className="w-[620px] mt-10 md:mt-0"
      />
    </section>
  );
}
