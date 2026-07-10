import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

function About() {
  return (
    <section id="about" className="py-16">
     <Container>
  <FadeIn>
    <SectionTitle
      title="About Me"
      description="A brief introduction about my background and interests."
    />
  </FadeIn>

  <div className="mt-12 mx-auto max-w-5xl grid gap-10 px-6 md:grid-cols-2">
    {/* Left Content */}
    <FadeIn>
      <div className="space-y-6 text-justify text-zinc-600 leading-relaxed">
        <p>
          I'm Blessy Kondaboina, a B.Tech CSE(Data Science)
          student at ACE Engineering College, Hyderabad.
        </p>

        <p>
          I enjoy designing backend systems, developing REST APIs, experimenting
          with AI applications, and building cloud-enabled software. My interests
          lie in backend engineering, system design, and solving practical
          problems through technology.
        </p>

        <p>
          I'm currently looking for Software Engineering Internship opportunities
          where I can contribute to real-world products while continuously
          improving my technical skills.
        </p>
      </div>
    </FadeIn>

    {/* Right Profile Card */}
    <FadeIn delay={0.15}>
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="space-y-5 text-sm">
          <div>
            <div className="mb-6 flex items-center gap-3">
  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
    <span className="text-lg text-blue-600">✦</span>
  </div>

  <div>
    <p className="text-sm font-semibold text-zinc-900">
      Academic Profile
    </p>
    <p className="text-xs text-zinc-500">
      CSE(Data Science) Student
    </p>
  </div>
</div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
  College
</p>
            <p className="font-medium text-zinc-800">
              ACE Engineering College
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
  Branch
</p>
            <p className="font-medium text-zinc-800">
              CSE(Data Science)
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
  CGPA
</p>
            <p className="font-medium text-zinc-800">
              8.68 / 10
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
  Duration
</p>
            <p className="font-medium text-zinc-800">
              2023 - 2027
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
</Container> 
    </section>
  );
}

export default About;