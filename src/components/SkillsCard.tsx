import type { SkillProp } from "@/utils/types";
import { Badge } from "./ui/badge";

export default function SkillsCard({ item }: { item: SkillProp }) {
  return (
    <div className="mb-4">
      <h3 className="text-main-text-color mb-3">
        <span className="mr-3">&gt;</span>
        {item.type}
      </h3>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((el, idx) => (
          <Badge
            className="tech-badge text-xs md:text-sm bg-transparent border border-main-text-color/30 text-main-text-color/90 hover:text-crimson-main-text hover:border-crimson-main-text/50 transition-all cursor-default"
            key={idx}
          >
            {el}
          </Badge>
        ))}
      </div>
    </div>
  );
}
