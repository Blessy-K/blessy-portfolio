import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-6 lg:px-8 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {eyebrow && (
          <p className="text-blue-500 uppercase tracking-[0.3rem] text-sm font-semibold">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-2xl text-zinc-400 leading-8">
            {description}
          </p>
        )}
      </motion.div>

      <div className="mt-14">
        {children}
      </div>
    </section>
  );
}

export default Section;