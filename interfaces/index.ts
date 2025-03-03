import { PROJECT } from "@/enums";

export interface ProjectDetail {
  id: PROJECT;
  title: string;
  type: "Professional" | "Personal";
  category: string;
  thumbnail: string;
  studio: string;
  platform: string;
  projectLength: string;
  brief: string;
  skills: string[];
  sections: ProjectSection[];
  externalLink?: string;
}

export interface ProjectSection {
  title: string;
  type: "image" | "list" | "gallery" | "text";
  contents?: string[];
  items?: ProjectSectionItem[];
}

export interface ProjectSectionItem {
  type: "image" | "video";
  src?: string;
  youtubeId?: string;
}
