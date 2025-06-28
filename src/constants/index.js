import {
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  project2,
  project3,
  mysql,
  express,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  project1,
} from '../assets'




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
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
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
     name: "github",
    icon: github,

  }
 

];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Honda Cars India Ltd.",
    icon: undefined, 
    iconBg: "#383E56",
    date: "June 2025 - Ongoing",
    points: [
      "Developing AI-based solutions for Electric Vehicles, targeting a 15–20% improvement in system efficiency through predictive maintenance and smart optimization models.",
      "Proposed and implemented UI/UX improvements across internal dashboards, aiming to streamline navigation, reduce cognitive load, and improve task completion time for over 100 users."
    ],
  },
];



const achievements = [
  "Knight on LeetCode with peak rating 1850+; ranked 1287 globally in Weekly Contest 451.",
  "Pupil on Codeforces with rating 1376; ranked 1261 in Round 1028 [Div. 2].",
  "Ranked Top 20 on the TUF+ Leaderboard among 5,000+ active DSA learners."
];

const projects = [
  {
    name: "Delhi Metro Route Optimization System",
    description:
      "C++-based route optimizer using Dijkstra's Algorithm and BFS for shortest paths across 250+ metro stations. Frontend with HTML, CSS, JavaScript for real-time route and travel time display.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Graph Algorithms", color: "green-text-gradient" },
      { name: "HTML", color: "white-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/sumitksr/Delhi-Metro-App",
    live_demo_link: "https://delhi-metro-app-ochre.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Real-time weather app using OpenWeather API supporting 2,00,000+ cities. Optimized UI for 20+ screen sizes with mobile-first layout and error handling.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "white-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/sumitksr/Weather-App",
    live_demo_link: "https://weather-app-alpha-azure.vercel.app/",
  },
  {
    name: "Tick Tack Toe",
    description:
      "A simple and fast implementation of the classic Tick Tack Toe game with a clean UI and responsive design. Play against a friend and enjoy the interactive experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "CSS", color: "white-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/sumitksr/Tick-TacK-Toe",
    live_demo_link: "https://tick-tac-k-toe.vercel.app/",
  },
];

export { services, technologies, experiences, projects, achievements };
