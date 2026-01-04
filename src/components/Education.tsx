import { motion } from "motion/react";
import MorphingBlob from "./MorphBlob";
import { educationData } from "@/utils/utils";
import EducationCard from "./EducationCard";
export default function Education() {
  return (
    <div id="education" className="py-24 w-[80%] mx-auto relative">
      <div className="w-full">
        <div className=" pb-20">
          <h1 className="text-5xl font-black text-white text-center mb-6 uppercase tracking-tighter">
            <span className="text-main-text-color">E</span>
            DUCATION
            <span className="text-crimson-main-text">_</span>
            LOG
          </h1>
          <p className=" text-gray-main-text mx-auto text-center max-w-2xl">
            System retrieval: academic background and certifications stored in
            local memory.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-1 w-8 bg-main-text-color/30 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-24 w-[60%] mx-auto ">
          {educationData.map((el) => (
            <EducationCard key={el.id} item={el}></EducationCard>
          ))}
        </div>
      </div>
    </div>
  );
}
