import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.35rem] text-blue-500 text-sm font-semibold"
        >
          SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-6xl md:text-8xl font-black leading-none"
        >
          Blessy
          <br />
          Kondaboina
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          Building scalable backend applications, cloud solutions and
          AI-powered software with a strong focus on clean architecture
          and real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-500 transition">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="rounded-full border border-zinc-700 px-7 py-4 hover:bg-zinc-900 transition">
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;