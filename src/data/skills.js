import {
  Code,
  Database,
  Smartphone,
  Cloud,
  Settings,
  Palette,
  GitBranch,
  Server,
} from 'lucide-react';

export const skills = {
  frontend: {
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, years: 1.5, icon: Code },
      { name: 'Next.js', level: 90, years: 1, icon: Code },
      { name: 'JavaScript', level: 95, years: 2, icon: Code },
      // { name: 'TypeScript', level: 85, years: 3, icon: Code },
      { name: 'Tailwind CSS', level: 90, years: 1, icon: Palette },
      { name: 'HTML/CSS', level: 95, years: 3, icon: Palette },
    ],
  },
  backend: {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90, years: 1, icon: Server },
      { name: 'Express.js', level: 88, years: 1, icon: Server },
      { name: 'PHP Laravel', level: 88, years: 1, icon: Server },
      // { name: 'Python', level: 85, years: 4, icon: Code },
      // { name: 'REST APIs', level: 92, years: 5, icon: Server },
      // { name: 'GraphQL', level: 80, years: 2, icon: Server },
      // { name: 'MongoDB', level: 80, years: 1, icon: Database },
      // { name: 'MySql', level: 80, years: 1, icon: Database },
    ],
  },
  database: {
    category: 'Database & Storage',
    skills: [
      { name: 'MongoDB', level: 88, years: 1, icon: Database },
      // { name: 'PostgreSQL', level: 85, years: 3, icon: Database },
      // { name: 'Redis', level: 80, years: 2, icon: Database },
      { name: 'Firebase', level: 82, years: 1, icon: Database },
      { name: 'MySql', level: 82, years: 1, icon: Database },
    ],
  },
  mobile: {
    category: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 85, years: 1, icon: Smartphone },
      { name: 'Flutter', level: 75, years: 1, icon: Smartphone },
    ],
  },
  // cloud: {
  //   category: 'Cloud & DevOps',
  //   skills: [
  //     { name: 'AWS', level: 85, years: 3, icon: Cloud },
  //     { name: 'Docker', level: 80, years: 2, icon: Settings },
  //     { name: 'Kubernetes', level: 70, years: 1, icon: Settings },
  //     { name: 'CI/CD', level: 82, years: 3, icon: GitBranch },
  //   ],
  // },
  tools: {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 95, years: 3, icon: GitBranch },
      { name: 'VS Code', level: 90, years: 3, icon: Settings },
      { name: 'Figma', level: 75, years: 1, icon: Palette },
      { name: 'Postman', level: 85, years: 1, icon: Settings },
      { name: 'Cursor', level: 85, years: 1, icon: Settings },
    ],
  },
};

export const certifications = [
  // {
  //   name: 'AWS Certified Solutions Architect',
  //   issuer: 'Amazon Web Services',
  //   year: 2024,
  //   credential: 'AWS-CSA-2024',
  // },
  // {
  //   name: 'React Developer Certification',
  //   issuer: 'Meta',
  //   year: 2023,
  //   credential: 'META-REACT-2023',
  // },
  // {
  //   name: 'Node.js Certified Developer',
  //   issuer: 'OpenJS Foundation',
  //   year: 2023,
  //   credential: 'OPENJS-NODE-2023',
  // },
  // {
  //   name: 'MongoDB Certified Developer',
  //   issuer: 'MongoDB University',
  //   year: 2022,
  //   credential: 'MONGODB-DEV-2022',
  // },
];
