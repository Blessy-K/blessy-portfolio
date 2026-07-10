import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Link
  to="/"
  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
>
  <ArrowLeft size={18} />
  Back to Home
</Link>
      <h1 className="mt-2 text-5xl font-bold tracking-[-0.04em] text-zinc-950 md:text-6xl">
        Certifications
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
        Professional certifications and training that strengthened my
        software engineering, cloud, AI and networking knowledge.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <a
            key={certificate.slug}
            href={
              certificate.credential
                ? certificate.credential
                : undefined
            }
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-zinc-300 hover:shadow-2xl"
          >
            <div className="flex h-72 items-center justify-center overflow-hidden bg-zinc-50">
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center px-4 text-center text-zinc-500">
  <p className="text-lg font-medium">
    {certificate.title}
  </p>

  <p className="mt-2 text-sm">
    PDF Certificate
  </p>
</div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                {certificate.title}
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                {certificate.issuer} • {certificate.year}
              </p>

              <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-48 group-hover:opacity-100">
                <p className="text-sm font-medium text-zinc-800">
                  What I Learned
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors duration-300 group-hover:border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Certificates;