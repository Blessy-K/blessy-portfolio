import { Award, ExternalLink } from "lucide-react";

type CertificateCardProps = {
  title: string;
  organization: string;
  year: string;
  credential?: string;
};

function CertificateCard({
  title,
  organization,
  year,
  credential,
}: CertificateCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <Award className="text-blue-500" size={28} />

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {year}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {organization}
      </p>

      {credential && (
        <a
          href={credential}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          View Credential
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}

export default CertificateCard;