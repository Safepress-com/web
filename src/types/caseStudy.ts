export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  industry: string;
  location: string;
  timeline: string;
  teamSize: string;
  image: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  tech: string[];
  gradient: string;
  url: string;
  link: string;
  status: 'Live Product' | 'Coming Soon' | 'In Development';
} 