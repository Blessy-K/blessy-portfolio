import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type CertificateCardProps = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
};

function CertificateCard({
  slug,
  title,
  issuer,
  year,
  skills,
}: CertificateCardProps) {
  return (
    <Link
      to={`/certificates/${slug}`}
      className="group block border-b border-zinc-200 py-8 transition-colors duration-300 hover:bg-zinc-50"
    >
      <div className="grid grid-cols-[90px_1fr_auto] items-start gap-8">
        {/* Year */}
        <span className="pt-1 text-sm font-medium text-zinc-400">
          {year}
        </span>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h3>

          <p className="mt-2 text-zinc-600">
            {issuer}
          </p>

          <div className="mt-4 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
            <p className="mb-2 text-sm font-medium text-zinc-800">
              What I Learned
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ArrowUpRight
          size={22}
          className="mt-1 text-zinc-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-900"
        />
      </div>
    </Link>
  );
}

export default CertificateCard;