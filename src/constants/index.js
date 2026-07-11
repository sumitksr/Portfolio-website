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
  "Pupil on Codeforces with rating 1435+; ranked 1261 in Round 1028 [Div. 2].",
  "Ranked Top 20 on the TUF+ Leaderboard among 5,000+ active DSA learners."
];

const projects = [
  {
  name: "AI Interview Platform",
  description:
    "Full-stack AI-powered interview preparation platform that generates role-specific interview questions, conducts mock interviews, and provides instant AI feedback with performance tracking. Built using Next.js, React, MongoDB, and Gemini AI.",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "React", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
    { name: "Gemini AI", color: "yellow-text-gradient" },
    { name: "Tailwind CSS", color: "white-text-gradient" },
  ],
  image: project1,
  source_code_link: "https://github.com/sumitksr/Ai-Interview",
  live_demo_link: "https://aceai.sumitksr.xyz/",
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
  name: "Quizlyze",
  description:
    "An AI-powered learning companion that transforms any content — PDF, text, or YouTube videos — into interactive educational experiences. Generate summaries, quizzes, and flashcards on the fly to help you learn smarter and faster.",
  tags: [
  
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "Tailwind CSS", color: "green-text-gradient" },
    { name: "Google Gemini", color: "orange-text-gradient" }
  ],
  image: project5,
  source_code_link: "https://github.com/sumitksr/Quizlyze",
  live_demo_link: "https://quizlyze.vercel.app/",
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
    image: project6,
    source_code_link: "https://github.com/sumitksr/Delhi-Metro-App",
    live_demo_link: "https://delhi-metro-app-ochre.vercel.app/",
  },
{
  name: "Movie Recommender System",
  description:
    "Machine learning-based movie recommendation system that suggests similar movies using content-based filtering and cosine similarity. Built with Python, Pandas, Scikit-learn, and Streamlit for an interactive recommendation experience.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Machine Learning", color: "green-text-gradient" },
    { name: "Scikit-learn", color: "pink-text-gradient" },
    { name: "Pandas", color: "yellow-text-gradient" },
    { name: "Streamlit", color: "white-text-gradient" },
  ],
  image: project4,
  source_code_link: "https://github.com/sumitksr/Movie-Recommender",
  live_demo_link: "https://cineguide-sumitksr.streamlit.app/",
},
 

];

export { services, technologies, experiences, projects, achievements };
