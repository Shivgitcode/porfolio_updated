import type { EducationProp } from "@/utils/types";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function EducationCard({ item }: { item: EducationProp }) {
  const isEven = item.index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: item.index * 0.15, ease: "easeOut" }}
      className="perspective-1000 mb-12 md:mb-16"
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Visual Badge/Year Side */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-linear-to-br from-main-text-color/20 to-crimson-main-text/10 border border-main-text-color/30 backdrop-blur-xl relative overflow-hidden group">
          <motion.div
            className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <GraduationCap size={120} className=" text-gray-main-text" />
          </motion.div>

          <div className="text-3xl md:text-4xl font-black text-main-text-color mb-2 glitch">
            {item.year.split(" - ")[1]}
          </div>
          <div className="text-xs text-gray-main-text uppercase tracking-[0.2em]">
            {item.year.split(" - ")[0]} START
          </div>

          <motion.div
            className="mt-4 md:mt-6 p-3 rounded-full bg-main-text-color/20 border border-main-text-color/40 text-main-text-color"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <Award size={24} />
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/3 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px grow bg-linear-to-r from-main-text-color/50 to-transparent" />
            <span className="text-xs text-crimson-main-text font-bold tracking-widest uppercase">
              Academic Record
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {item.degree}{" "}
            <span className="text-main-text-color block text-lg md:text-xl mt-1 opacity-80">
              {item.field}
            </span>
          </h3>

          <div className="flex items-center gap-2 md:gap-4 text-gray-main-text font-mono text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <MapPin
                size={14}
                className="text-crimson-main-text md:h-3.5 md:w-3.5"
              />
              <span>{item.school}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1">
              <Calendar
                size={14}
                className="text-crimson-main-text md:w-3.5 md:h-3.5"
              />
              <span>{item.year}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-3 pt-3 md:pt-4">
            {item.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-2 md:p-3 rounded-lg bg-white/5 border border-white/5 hover:border-main-text-color/20 hover:bg-white/10 transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-main-text-color shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                <span className="text-xs md:text-sm text-gray-main-text group-hover:text-white transition-colors">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
