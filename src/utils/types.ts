export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  tag: string;
  status: string;
  index: number;
  links: {
    live: string | null;
    code: string | null;
  };
};

export type EducationProp = {
  school: string;
  degree: string;
  field: string;
  year: string;
  achievements: string[];
  index: number;
};

export type SkillProp = {
  type: string;
  skills: string[];
};

export interface ExperienceItemData {
  company: string;
  role: string;
  type: string; // "Full-time" | "Internship" | "Contract" | "Freelance"
  location: string;
  startDate: string;
  endDate: string; // Use "Present" for ongoing
  isOngoing?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}
