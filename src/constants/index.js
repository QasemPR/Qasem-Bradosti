import {
  mobile,
  backend,
  creator,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jobit,
  tripguide,
  word,
  excel,
  powerpoint,
  access,
  cpp,
  csharp,
  sql,
  firebase,
  arabic,
  kurdish,
  english,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Computer Skills",
  },
  {
    id: "languages",
    title: "Language Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full  Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "Java Script",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Word",
    icon: word,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Point",
    icon: powerpoint,
  },
  {
    name: "aceess",
    icon: access,
  },
];

const languages = [
  {
    name: "Kurdish",
    icon: kurdish,
  },
  {
    name: "English",
    icon: english,
  },
  {
    name: "Arabic",
    icon: arabic,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Techno Speed Software Team",
    iconBg: "#0070ff",
    date: "March 2024 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support & Technical Support Specialist",
    company_name: "Bradost PC and Mobile Center",
    iconBg: "#0070ff",
    date: "Jan 2018 - Jul 2019",
    points: [
      "Over the past two years, I have gained extensive experience in providing IT support and technical assistance to users, ensuring smooth and efficient operation of their systems and devices. My role involved",
      "Troubleshooting and Issue Resolution: Diagnosed and resolved hardware, software, and network-related issues, minimizing downtime and enhancing productivity.",
      "System Maintenance and Upgrades: Performed regular system checks, software updates, and hardware maintenance to keep IT infrastructure running smoothly.",
      "Technical Assistance: Provided remote and in-person support for end-users, guiding them through the use of software, devices, and other technical tools.",
      "Setup and Configuration: Assisted in setting up new devices, configuring networks, and installing required software for users and departments.",
      "Customer Service: Delivered clear, prompt, and professional support, ensuring user satisfaction and resolving issues within established service level agreements (SLAs).",
      "Documentation: Maintained detailed records of technical issues, solutions provided, and systems updated for future reference and audits.",
      "With strong problem-solving skills and a customer-focused approach, I successfully contributed to the seamless operation of IT services, helping businesses achieve their technological goals.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Sardam Center",
    iconBg: "#0070ff",
    date: "Jul 2019 - march 2021",
    points: [
      "With 2 years of hands-on experience as an IT Support Specialist, I have effectively provided technical assistance and support for various IT-related issues. My key responsibilities included:",

      "Hardware and Software Troubleshooting: Diagnosed and resolved problems related to desktops, laptops, printers, and other peripherals, ensuring minimal disruption to user operations.",

      "System Setup and Configuration: Assisted in the installation and configuration of new hardware and software, including operating systems and business applications, for employees and departments.",

      "User Support: Provided first-level support, helping users with login issues, software errors, and connectivity problems, both remotely and on-site.",

      "Network Support: Helped maintain the local network by troubleshooting connectivity issues, managing routers, and ensuring smooth internet and intranet access.",

      "System Maintenance: Performed regular system checks, updates, and backups to ensure data integrity and prevent security vulnerabilities.",

      "Customer Service: Delivered excellent support with a focus on clear communication, quickly addressing user concerns and ensuring a positive experience.",

      "Throughout these two years, I honed my technical and communication skills, ensuring efficient resolution of issues and contributing to the seamless operation of IT services.",
    ],
  },
];

const projects = [
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
    name: "Food Delivary App",
    description: "This Appliction is using for food delivary",
    tags: [
      {
        name: "react Native",
        color: "blue-text-gradient",
      },
      {
        name: "node js and express js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, languages };
