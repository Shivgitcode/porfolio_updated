import { skills } from "@/utils/utils";
import SkillsCard from "./SkillsCard";

export default function SkillMatrix() {
  return (
    <div
      id="skills"
      className=" w-full py-16 mx:py-24 bg-linear-to-b from-secondary/30 to-secondary/10 border-y border-main-text-color/10"
    >
      <div className=" px-4 md:w-[80%] mx-auto ">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 lg:text-5xl text-white ">
            <span className="text-main-text-color mr-5">&gt;</span>
            Skill Matrix
          </h2>
          <div className="bg-linear-to-r from-main-text-color to-crimson-main-text rounded-full w-24 md:w-40 h-1"></div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((el) => (
            <SkillsCard key={el.type} item={el}></SkillsCard>
          ))}
        </div>
      </div>
    </div>
  );
}
