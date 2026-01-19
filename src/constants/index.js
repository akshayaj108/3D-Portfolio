import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  express,
  visionTechno,
  nestjs,
  postgresql,
  microServices,
  nextjs,
  jebiLogo,
  jbLogo,
  smsLogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work-Experience",
  },
  {
    id: "skills",
    title: "Tech-Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next JS",
    icon: nextjs,
  },
   {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "JEBITECH – Empowering Hospitality Technology",
    icon: jbLogo,
    iconBg: "#383E56",
    date: "Mar 2025 - ",
    points: [
      "Worked as a Full Stack Developer, contributing to frontend development using Next.js and backend API development using NestJS and PostgreSQL.",
      "Developed end-to-end features by implementing UI screens, backend APIs, and database integrations for property management and task workflow modules.",
      "Designed, developed, and integrated REST APIs using NestJS and PostgreSQL, supporting multiple modules and enabling reliable, scalable frontend-backend communication.",
      "Improved team productivity by ~15% by developing reusable JavaScript utility functions that reduced duplicate code and accelerated feature development.",
      "Debugged and resolved issues across frontend and backend to improve application stability and performance."
    ],
  },
   {
    title: "React Developer",
    company_name: "SMS-Magic",
    icon: smsLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Sept 2024",
    points: [
      "Enhanced UI responsiveness by ~60% through optimized state management using Context API and Redux Toolkit.",
      "Refactored existing codebase to reduce technical debt by 15% and improve maintainability.",
      "Collaborated in a remote-first Agile team using Slack, Jira, and GitHub for seamless cross-functional coordination.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Full Stack Developer",
    company_name: "Vision Techno Services Pvt Ltd",
    icon: visionTechno,
    iconBg: "#383E56",
    date: "Feb 2021 - Jan 2024",
    points: [
      "Developed and maintained production MERN stack applications supporting multiple business modules with a focus on performance and scalability.",
      "Contributed to the development of a reusable component library, improving code reuse and reducing development effort across multiple features.",
      "Designed and developed REST APIs for multiple modules, enabling seamless frontend-backend integration and supporting core business workflows.",
      "Optimized NoSQL database queries by refactoring query logic and reducing redundant data fetches, resulting in lower database load and improved API response consistency.",
      "Collaborated with cross-functional teams including designers, QA, and backend engineers in a remote setup to deliver features on schedule."
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
