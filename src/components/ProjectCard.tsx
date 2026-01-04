"use client";
import { Project } from "@/utils/types";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="glass-card flex flex-col border border-crimson-main-text/20 hover:border-main-text-color/40 transition-all rounded-xl duration-300 group h-full overflow-hidden "
    >
      <div className="absolute top-6 right-6 category-badge px-4 py-2 rounded-full text-sm font-semibold text-crimson-main-text">
        {item.tag}
      </div>
      <div className="p-8 flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-3 mt-6 group-hover:text-main-text-color transition-colors">
          {item.title}
        </h1>
        <p className=" leading-relaxed mb-6 grow">{item.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6 px-8">
        {/*skills*/}
        {item.tech.map((el, idx) => (
          <Badge
            className="tech-badge text-xs bg-transparent border border-main-text-color/30 text-main-text-color hover:text-crimson-main-text"
            key={idx}
          >
            {el}
          </Badge>
        ))}
      </div>
      <ul className="space-y-2 mb-6 text-sm px-8">
        {item.highlights.map((el, idx) => (
          <li
            key={idx}
            className=" text-main-text-color flex mt-0.5 items-center gap-3"
          >
            <span className="">.</span>
            <p className="">{el}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-6 mt-auto pt-6 border-t border-white/5 px-8 pb-8">
        <Link href={item.links.live as string}>Live</Link>
        <Link href={item.links.code as string}>Code</Link>
      </div>
    </motion.div>
  );
}
