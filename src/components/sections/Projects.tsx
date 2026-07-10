import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import FadeIn from "../animations/FadeIn";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="work" className="py-16">
      <Container>
        <FadeIn>
  <SectionTitle
    title="Projects"
    description="A collection of projects focused on backend engineering, AI, automation and cloud technologies."
  />
</FadeIn>

       <div className="space-y-6">
  {projects.map((project, index) => (
    <FadeIn key={project.slug} delay={index * 0.08}>
      <ProjectCard
        slug={project.slug}
        title={project.title}
        subtitle={project.subtitle}
        tech={project.tech}
        year={project.year}
        status={project.status}
        role={project.role}
        index={index + 1}
      />
    </FadeIn>
  ))}
</div>
      </Container>
    </section>
  );
}

export default Projects;