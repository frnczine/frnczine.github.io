export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  shortDesc: string;
  tools: string[];
  details: {
    year: string;
    fullDescription: string;
    liveLink?: string;
    contributions: string[];
  };
}