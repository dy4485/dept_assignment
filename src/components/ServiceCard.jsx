export default function ServiceCard({ icon, title, desc, bg }) {
  return (
    <div className={`p-8 rounded-2xl ${bg}`}>
      <img src={icon} alt={title} className="w-16 mb-6" />

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {desc}
      </p>

      <button className="flex items-center gap-2 text-blue-600 font-medium">
        Learn More →
      </button>
    </div>
  );
}
