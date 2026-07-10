import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center py-20 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Internship Badge */}
<div className="mb-6 flex w-fit mx-auto items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
  <span className="block h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
  Open to Software Engineering Internships
</div>          

          {/* Greeting */}
          <span className="text-lg font-medium text-zinc-500">
            {"Hi, I'm".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-[fadeIn_0.5s_ease_forwards]"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>

          {/* Name */}
          <h5 className="mt-5 text-5xl font-bold tracking-[-0.06em] leading-[0.95] md:text-7xl lg:text-[6.5rem]">
  <span className="inline-block">
    {"Blessy".split("").map((letter, index) => (
      
      <span
        key={index}
        className="inline-block text-[#0F172A] animate-[fadeIn_0.5s_ease_forwards]"
        style={{
          animationDelay: `${0.5 + index * 0.15}s`,
          opacity: 0,
        }}
      >
        {letter}
      </span>
    ))}
  </span>
</h5>
<p className="mt-4 text-xl font-medium text-blue-700">
  Software Engineering Student • Backend Developer
</p>
          <p className="mx-auto mt-7 max-w-3xl text-[1.125rem] leading-8 text-zinc-600 lg:text-xl">
            I'm a B.Tech Computer Science (Data Science) student passionate about backend engineering, scalable REST APIs, AI-powered applications, and cloud technologies. I enjoy building reliable software that solves real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button href="#work">
  <span className="flex items-center gap-2 text-white">
    View Work
    <ArrowRight size={18} />
  </span>
</Button>

            <Button
              href="/Resume/Blessy_Kondaboina_SoftwareEngineer.pdf"
              variant="secondary"
            >
              Resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/Blessy-K"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition-colors duration-300 hover:text-blue-700"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/blessykondaboina"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition-colors duration-300 hover:text-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Blessy_10/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition-colors duration-300 hover:text-blue-700"
            >
              LeetCode
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;