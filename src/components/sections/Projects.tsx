import { portfolio } from "../../data/portfolio";
import ProjectCard from "../cards/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-500 uppercase tracking-[0.3rem] text-sm">
          Featured Work
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-black">
          Selected Projects
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-8">
          A selection of projects that demonstrate my experience in backend
          engineering, cloud computing, APIs, and AI-driven applications.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {portfolio.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;