import ProjectCard from "./ProjectCard";

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

export default function Projects() {
  return (
    <section className="px-10 py-20 bg-white">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Selected projects
        </h2>
        <p className="text-gray-600">
          Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
          tristique. Pellentesque quis augue ac mauris posuere vehicula.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          image={project1}
          title="E-tutor - education & online LMS"
        />
        <ProjectCard
          image={project2}
          title="Pagoupon - Properties Agency Website"
        />
        <ProjectCard
          image={project3}
          title="Find workspace - Mobile app design"
        />
      </div>

    </section>
  );
}
