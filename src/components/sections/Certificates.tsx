import Section from "../common/Section";
import CertificateCard from "../cards/CertificateCard";
import { portfolio } from "../../data/portfolio";

function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Learning & Certifications"
      description="Professional certifications and programs that strengthened my skills in AI, cloud computing, networking, and software engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            title={certificate.title}
            organization={certificate.organization}
            year={certificate.year}
            credential={certificate.credential}
          />
        ))}
      </div>
    </Section>
  );
}

export default Certificates;