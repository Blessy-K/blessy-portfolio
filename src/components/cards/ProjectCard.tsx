import { ArrowUpRight, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
};

function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-400">{subtitle}</p>

          <h3 className="mt-2 text-3xl font-bold">
            {title}
          </h3>
        </div>

        <ArrowUpRight className="transition group-hover:rotate-45" />
      </div>

      <p className="leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
        >
          <Code2 size={18} />
          View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;