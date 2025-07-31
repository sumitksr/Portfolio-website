import {
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  project2,
  project3,
  project4,
  project6,
  project5,
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
    date: "June 2025 - July 2025",
    points: [
      "Contributed to the development of an AI-Powered Driver Drowsiness and Distraction Detection System, enhancing road safety through real-time facial behavior monitoring using computer vision techniques.",
      "Gained practical experience with enterprise-grade automotive software such as HDMPS , H-Connect etc.and developed a deep understanding of digital workflows in large-scale OEMs like Honda."
    ],
  },
];



const achievements = [
  "Knight on LeetCode with peak rating 1919+; ranked 1287 globally in Weekly Contest 451.",
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
  name: "Blog Platform",
  description:
    "Full-stack blog platform built with React and Express. Features user authentication, CRUD operations, and a responsive UI. Allows users to create, edit, and explore blogs in real-time.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Express", color: "green-text-gradient" },
    { name: "MongoDB", color: "white-text-gradient" },
    { name: "Node.js", color: "pink-text-gradient" }
  ],
  image: project2, 
  source_code_link: "https://github.com/sumitksr/BlogApp",
  live_demo_link: "https://blogapp-sumitksr.vercel.app/",
},

  {
  name: "URL Shortener",
  description:
    "A sleek and efficient URL shortener built with Next.js. Converts long URLs into compact links using Base62 encoding and supports custom aliases with real-time redirection and link preview.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
    { name: "Base62", color: "green-text-gradient" },
    { name: "MongoDB", color: "white-text-gradient" }
  ],
  image: project3, 
  source_code_link: "https://github.com/sumitksr/URL-Shortner",
  live_demo_link: "https://bitzipp.vercel.app/",
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
    image: project4,
    source_code_link: "https://github.com/sumitksr/Weather-App",
    live_demo_link: "https://weather-app-alpha-azure.vercel.app/",
  },
  {
  name: "Razorpay Clone",
  description:
    "A visually accurate frontend clone of Razorpay built with HTML and Tailwind CSS. Fully responsive layout replicating modern UI components and animations for practice and learning purposes.",
  tags: [
    { name: "HTML", color: "blue-text-gradient" },
    { name: "Tailwind CSS", color: "green-text-gradient" }
  ],
  image: project5,
  source_code_link: "https://github.com/sumitksr/Razorpay-Clone",
  live_demo_link: "https://razorpay-clone-eight-woad.vercel.app/",
},
{
  name: "GreenCart – Sparkathon Project",
  description:
    "An eco-friendly e-commerce platform built for the Walmart Sparkathon Hackathon. ",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Express.js", color: "green-text-gradient" },
    { name: "MongoDB", color: "white-text-gradient" },
    { name: "Tailwind CSS", color: "pink-text-gradient" }
  ],
  image: project6,
  source_code_link: "https://github.com/sumitksr/Sparkathon",
  live_demo_link: "https://greencart-learners.vercel.app/",
},


];

export { services, technologies, experiences, projects, achievements };
