import testimonialImg from "../assets/testimonial.jpg";

export default function Testimonials() {
  return (
    <section className="px-10 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0B1B3B] mb-8 leading-tight">
            What our client says <br /> about our services.
          </h2>

          {/* Quote */}
          <div className="flex gap-6">
            {/* Blue Line */}
            <div className="w-1 bg-blue-600 rounded-full"></div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                “This guy is true professional and very experienced in
                migration and server configuration. He was able to
                complete my order in time and as per agreed scope.
                Highly recommend!”
              </p>

              {/* Quote Icon */}
              <div className="text-blue-600 text-3xl font-bold">“ ”</div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-10">
            <button className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xl hover:bg-blue-100">
              ←
            </button>
            <button className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xl hover:bg-blue-100">
              →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={testimonialImg}
            alt="Client"
            className="rounded-2xl w-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
