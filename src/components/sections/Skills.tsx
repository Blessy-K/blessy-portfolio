import Section from "../common/Section";
import SkillCategory from "../cards/SkillCategory";
import { portfolio } from "../../data/portfolio";

function Skills() {
  const { skills } = portfolio;

  return (
    <Section
      id="tech"
      eyebrow="Tech Stack"
      title="Technologies I Work With"
      description="A collection of technologies, frameworks, and tools I use to build reliable, scalable software."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkillCategory title="Languages" skills={skills.languages} />

        <SkillCategory title="Frontend" skills={skills.frontend} />

        <SkillCategory title="Backend" skills={skills.backend} />

        <SkillCategory title="Databases" skills={skills.databases} />

        <SkillCategory title="Cloud" skills={skills.cloud} />

        <SkillCategory title="Tools" skills={skills.tools} />
      </div>
    </Section>
  );
}

export default Skills;