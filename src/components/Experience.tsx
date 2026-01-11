import { experienceData } from "@/utils/utils";
import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-white font-black mb-4 md:mb-6 uppercase tracking-tighter">
          <span className="text-main-text-color">E</span>XPERIENCE
          <span className="text-crimson-main-text">_</span>LOG
        </h2>
        <p className="text-sm md:text-base text-gray-main-text max-w-2xl mx-auto px-4">
          Professional journey: work experience and contributions to real-world
          projects.
        </p>
        <div className="mt-6 md:mt-8 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-1 w-6 md:w-8 bg-main-text-color/30 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative space-y-8 md:space-y-12">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}
      </div>
    </section>
  );
}
