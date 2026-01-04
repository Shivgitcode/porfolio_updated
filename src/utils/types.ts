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
