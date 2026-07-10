import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Flask"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Skills"
            description="Technologies I use to build reliable software."
          />
        </FadeIn>

        <div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.1}>
              <div
  className="h-full min-h-[220px] rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;