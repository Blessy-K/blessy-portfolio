import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  slug: string;
  title: string;
  subtitle: string;
  tech: string;
  year: string;
  status: string;
  role: string;
  index: number;
};

function ProjectCard({
  slug,
  title,
  subtitle,
  tech,
  year,
  status,
  role,
  index,
}: ProjectCardProps) {
  return (
    <Link
      to={`/work/${slug}`}
      className="group block rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
    >
      <div className="grid gap-8 md:grid-cols-[90px_1fr_auto] md:items-start">

        {/* Number + Year */}
        <div>
          <p className="text-3xl font-bold text-zinc-200 transition-colors duration-300 group-hover:text-blue-200">
            {String(index).padStart(2, "0")}
          </p>

          <p className="mt-3 text-sm font-medium text-zinc-400">
            {year}
          </p>
        </div>


        {/* Content */}
        <div>
          <h3 className="text-3xl font-bold tracking-[-0.03em] text-zinc-950 transition-colors duration-300 group-hover:text-blue-700">
            {title}
          </h3>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {subtitle}
          </p>


          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
              {role}
            </span>

            <span className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-medium text-zinc-600">
              {status}
            </span>

          </div>


          <p className="mt-6 text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-800">
            {tech}
          </p>

        </div>


        {/* Arrow */}
        <div className="rounded-full border border-zinc-200 p-2 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
          <ArrowUpRight
            size={22}
            className="text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
          />
        </div>

      </div>
    </Link>
  );
}

export default ProjectCard;