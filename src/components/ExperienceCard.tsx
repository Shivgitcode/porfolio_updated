import { ExperienceItemData } from "@/utils/types";
import { motion } from "motion/react";
import { ExternalLink, Calendar, Briefcase, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface ExperienceCardProps extends ExperienceItemData {
  index: number;
}

export default function ExperienceCard({
  company,
  role,
  type,
  location,
  startDate,
  endDate,
  isOngoing,
  description,
  responsibilities,
  technologies,
  companyUrl,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-main-text-color/50 via-main-text-color/20 to-transparent transform md:-translate-x-1/2 hidden md:block" />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full border-2 border-main-text-color bg-background transform -translate-x-1/2 z-10 hidden md:block"
        animate={
          isOngoing
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(0, 255, 255, 0.4)",
                  "0 0 0 10px rgba(0, 255, 255, 0)",
                  "0 0 0 0 rgba(0, 255, 255, 0.4)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div
        className={`md:w-1/2 ${
          index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
        }`}
      >
        <div className="glass-card p-5 md:p-6 border-main-text-color/20 hover:border-main-text-color/40 transition-all group">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              {isOngoing && (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              )}
              <Badge className="bg-crimson-main-text/20 text-crimson-main-text border-crimson-main-text/30 text-xs">
                {type}
              </Badge>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-main-text">
              <Calendar size={12} className="text-main-text-color" />
              <span>
                {startDate} - {endDate}
              </span>
            </div>
          </div>

          {/* Role & Company */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-main-text-color transition-colors">
            {role}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-main-text-color hover:text-crimson-main-text transition-colors font-mono text-sm font-semibold"
              >
                <Briefcase size={14} />
                {company}
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-main-text-color text-sm font-semibold">
                <Briefcase size={14} />
                {company}
              </span>
            )}
            <span className="text-gray-main-text">•</span>
            <span className="flex items-center gap-1 text-xs text-main-text-color">
              <MapPin size={12} />
              {location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-main-text leading-relaxed mb-4">
            {description}
          </p>

          {/* Responsibilities */}
          <div className="space-y-2 mb-4">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2 text-sm text-gray-main-text group/item"
                whileHover={{ x: 5 }}
              >
                <span className="text-primary mt-0.5">▸</span>
                <span className="group-hover/item:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                className="tech-badge bg-background text-[10px] md:text-xs text-main-text-color/80 px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
