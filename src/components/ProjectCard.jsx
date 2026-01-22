export default function ProjectCard({ image, title }) {
  return (
    <div className="group">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {title}
      </h3>

      <a
        href="#"
        className="text-blue-600 font-medium text-sm inline-flex items-center gap-1"
      >
        View Case Study →
      </a>
    </div>
  );
}
