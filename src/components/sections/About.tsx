import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg leading-9 max-w-4xl"
      >
        I'm Blessy, a Computer Science (Data Science)
        undergraduate passionate about Software Engineering,
        Cloud Computing, Artificial Intelligence, and Backend
        Development. I enjoy solving real-world problems through
        scalable applications and continuously improving my skills
        in Data Structures, Algorithms, System Design, and Modern
        Software Development.
      </motion.p>
    </section>
  );
}

export default About;