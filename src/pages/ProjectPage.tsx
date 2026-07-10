import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Project not found.</h1>

        <Link
          to="/"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <Link
  to="/"
  className="inline-flex items-center gap-2 text-zinc-500 transition hover:text-[#0F172A]"
>
  ← Back to Projects
</Link>

<div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">

  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
    PROJECT CASE STUDY
  </p>

  <h1 className="mt-5 text-5xl font-bold tracking-tight text-[#0F172A]">
    {project.title}
  </h1>

  <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
    {project.subtitle}
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    {[project.year, project.status, project.duration, project.team, project.role].map(
      (item) => (
        <span
          key={item}
          className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
        >
          {item}
        </span>
      )
    )}
  </div>

</div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-[#0F172A]">
      Overview
    </h2>

    <p className="mt-5 leading-8 text-zinc-600">
      {project.overview}
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-[#0F172A]">
      Problem Statement
    </h2>

    <p className="mt-5 leading-8 text-zinc-600">
      {project.problem}
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-[#0F172A]">
      Solution
    </h2>

    <p className="mt-5 leading-8 text-zinc-600">
      {project.solution}
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-[#0F172A]">
      Architecture
    </h2>

    <p className="mt-5 leading-8 text-zinc-600">
      {project.architecture}
    </p>
  </div>

</div>

      <section className="mt-16">
  <h2 className="text-3xl font-bold text-[#0F172A]">
    Technology Stack
  </h2>

  <div className="mt-8 flex flex-wrap gap-4">
    {project.tech.split(" • ").map((item) => (
      <span
        key={item}
        className="rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        {item}
      </span>
    ))}
  </div>
</section>

      <section className="mt-14">
  <h2 className="text-2xl font-semibold">Project Metrics</h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {project.metrics.map((metric) => (
      <div
        key={metric.label}
        className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          {metric.label}
        </p>

        <p className="mt-4 text-3xl font-bold text-[#0F172A]">
          {metric.value}
        </p>
      </div>
    ))}
  </div>
</section>

   <section className="mt-16">
  <h2 className="text-3xl font-bold text-[#0F172A]">
    Challenges
  </h2>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    {project.challenges.map((challenge) => (
      <div
        key={challenge}
        className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 font-bold">
          !
        </div>

        <p className="leading-7 text-zinc-600">
          {challenge}
        </p>
      </div>
    ))}
  </div>
</section>

       <section className="mt-16">
  <h2 className="text-3xl font-bold text-[#0F172A]">
    Key Learnings
  </h2>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    {project.learnings.map((learning) => (
      <div
        key={learning}
        className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 font-bold">
          ✓
        </div>

        <p className="leading-7 text-zinc-600">
          {learning}
        </p>
      </div>
    ))}
  </div>
</section>

      <section className="mt-16">
  <h2 className="text-3xl font-bold text-[#0F172A]">
    My Responsibilities
  </h2>

  <div className="mt-8 border-l-2 border-blue-200 pl-8">
    {project.responsibilities.map((item) => (
      <div
        key={item}
        className="relative mb-10"
      >
        <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          ✓
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <p className="leading-7 text-zinc-700">
            {item}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      <section className="mt-16">
  <h2 className="text-3xl font-bold text-[#0F172A]">
    Key Features
  </h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {project.features.map((feature) => (
      <div
        key={feature}
        className="rounded-2xl border border-blue-100 bg-blue-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="mb-3 text-lg font-bold text-blue-600">
          ✓
        </div>

        <p className="font-medium text-zinc-700">
          {feature}
        </p>
      </div>
    ))}
  </div>
</section>

      <section className="mt-20 rounded-3xl border border-zinc-200 bg-[#0F172A] px-10 py-12 text-center">

  <h2 className="text-3xl font-bold text-white">
    Explore the Source Code
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
    This project showcases my approach to software engineering, architecture,
    and building production-ready applications.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">

    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      View GitHub
    </a>

    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
      >
        Live Demo
      </a>
    )}

  </div>

</section>

    </main>
  );
}

export default ProjectPage;