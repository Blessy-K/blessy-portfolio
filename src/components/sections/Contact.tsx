import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

function Contact() {
  const links = [
    {
      name: "Email",
      href: "mailto:blessy4610@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/blessykondaboina",
    },
    {
      name: "GitHub",
      href: "https://github.com/Blessy-K",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/Blessy_10/",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Let's build something together."
            description="I'm open to Software Engineering opportunities, collaborations, and interesting projects."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default Contact;