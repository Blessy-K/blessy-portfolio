import { Link, useParams } from "react-router-dom";
import { certificates } from "../data/certificates";

function CertificatePage() {
  const { slug } = useParams();

  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Certificate not found.</h1>

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
        className="text-zinc-500 transition hover:text-zinc-900"
      >
        ← Back
      </Link>

      <h1 className="mt-8 text-5xl font-semibold tracking-tight">
        {certificate.title}
      </h1>

      <p className="mt-4 text-xl text-zinc-600">
        {certificate.issuer} • {certificate.year}
      </p>
      <img
  src={certificate.image}
  alt={certificate.title}
  className="mt-10 w-full rounded-3xl border border-zinc-200 shadow-lg"
/>
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <p className="mt-4 leading-8 text-zinc-600">
          {certificate.overview}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I Learned</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14 flex flex-wrap gap-4">
        {certificate.credential && (
          <a
            href={certificate.credential}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            View Certificate
          </a>
        )}

        {certificate.certificateUrl && (
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
          >
            View Credly Badge
          </a>
        )}
      </section>
    </main>
  );
}

export default CertificatePage;