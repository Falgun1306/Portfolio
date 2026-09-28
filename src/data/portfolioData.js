export const personalInfo = {
  name: "Falgun Panchal",
  location: "Ahmedabad, India",
  email: "panchalfalgun3@gmail.com",
  github: "https://github.com/Falgun1306",
  linkedin: "https://www.linkedin.com/in/falgun-panchal-3a044427a",
  resumePath: "/Falgun_Panchal_Resume.pdf",
  about:
    "MERN Stack developer who builds practical web applications and solves real-world problems. Constantly learning and turning ideas into working products.",
  typingTitles: [
    "MERN Stack Developer",
    "Backend Architect",
    "React Developer",
    "Always Learning and Always Building"
  ],
};


export const projects = [
  {
    id: "gym-management",
    title: "Gym Management System",
    isFeatured: true,
    image: "/images/gym-management.png",
    problem:
      "Local gyms rely on manual records and scattered tools to manage members, payments, and attendance.",
    description:
      "Full-stack platform to centralize gym operations, member management, and admin tasks.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    features: [
      "Role-based access (Admin, Trainer, Member)",
      "Member & membership management",
      "Attendance & payment tracking",
      "Dashboard with gym metrics",
    ],
    github: "https://github.com/Falgun1306/Gym-Management",
    liveDemo: "https://gym-management-inky-chi.vercel.app",
    accentColor: "#06b6d4",
  },
  {
    id: "meditrack",
    title: "MediTrack",
    isFeatured: false,
    image: "/images/meditrack.png",
    problem:
      "People forget medicine doses and lose track of stock, refills, and treatment schedules.",
    description:
      "Smart medicine reminder app for managing schedules, stock, family members, and alerts.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Twilio",
      "Node-Cron",
    ],
    features: [
      "Medicine & dose scheduling",
      "Automatic stock & course tracking",
      "Family member management",
      "Reminders & alerts via Twilio",
    ],
    github: "https://github.com/Falgun1306/MediTrack",
    liveDemo: "https://medi-track-ashen.vercel.app",
    accentColor: "#8b5cf6",
  },
  {
    id: "news-app",
    title: "News Application",
    isFeatured: false,
    image: "/images/news-app.png",
    problem:
      "Browsing news across categories is inconvenient when scattered across sources.",
    description:
      "Responsive news app with category browsing, search, and pagination.",
    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "NewsAPI",
    ],
    features: [
      "Category-based browsing",
      "Search functionality",
      "Pagination",
      "Responsive UI with loading states",
    ],
    github: "https://github.com/Falgun1306/thandi-news",
    liveDemo: "https://thandi-news.vercel.app",
    accentColor: "#f59e0b",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    icon: "code",
    skills: ["JavaScript (ES6+)", "Java", "SQL", "HTML5 & CSS3"],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React.js", "Tailwind CSS", "DaisyUI", "Zustand"],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM"],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Deploy",
    icon: "wrench",
    skills: ["Git & GitHub", "Vercel", "Render", "Postman", "VS Code"],
  },
];
