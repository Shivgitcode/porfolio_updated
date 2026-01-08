import { projects } from "@/utils/utils";
import ProjectCard from "./ProjectCard";

export default function FeaturedProject() {
  return (
    <div id="work" className="w-[80%] mx-auto relative py-24">
      <div className="w-full">
        <div className="flex flex-col gap-3 mb-16">
          <h1 className="text-white text-5xl ">
            <span className=" text-main-text-color mr-5">&gt;</span>Featured
            Projects
          </h1>
          <div className="h-1 w-40 bg-linear-to-r from-main-text-color to-crimson-main-text rounded-full"></div>
        </div>
        <div className="text-white gap-3 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
          {projects.map((el) => {
            return <ProjectCard key={el.id} item={el}></ProjectCard>;
          })}
        </div>
      </div>
    </div>
  );
}
