// ============================================================
// portfolioData.js — Single source of truth for all portfolio content.
// Edit this file to update your website without touching components.
// ============================================================

export const personalInfo = {
  name: "V. Krishnasurya",
  initials: "VK",
  title: "AI & Cloud Engineer Aspirant",
  subtitle: "B.Tech IT Student | AI & Cloud Engineer Aspirant",
  description:
    "I am a passionate Information Technology student interested in Artificial Intelligence, Machine Learning, Cloud Computing and .NET development. I enjoy building practical applications that solve real-world problems.",
  college: "Sir Isaac Newton College of Engineering and Technology",
  degree: "B.Tech Information Technology",
  year: "4th Year",
  location: "Tamil Nadu, India",
  profileImage: "/profile.jpg",
  resumePath: "/resume/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/suryavinayagam3-cloud",
  linkedin: "LINKEDIN_URL_HERE",
  email: "suryavinayagam3@gmail.com",
};

export const aboutHighlights = [
  { label: "Projects", value: "7+" },
  { label: "Technologies", value: "16+" },
  { label: "Certifications", value: "Coming Soon" },
  { label: "Education", value: "B.Tech IT" },
];

export const skills = [
  {
    category: "Programming",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",
    items: ["Python", "C#"],
  },
  {
    category: "Web",
    icon: "Globe",
    color: "from-purple-500 to-pink-400",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "from-emerald-500 to-teal-400",
    items: ["ASP.NET", ".NET", "Flask"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "from-violet-500 to-purple-400",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "RAG",
      "Gemini API",
      "Generative AI",
    ],
  },
  {
    category: "Cloud",
    icon: "Cloud",
    color: "from-sky-500 to-blue-400",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "from-orange-500 to-amber-400",
    items: ["Git", "GitHub", "VS Code", "antigravity", "stitch"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Based Early Detection of Diabetes Using Machine Learning",
    description:
      "An AI-based machine learning system designed for early diabetes risk detection using a Hybrid Explainable Ensemble Learning Framework (HEELF). The system combines preprocessing, feature selection, ensemble learning and explainable AI to provide understandable risk predictions.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "SMOTE",
      "RFE",
      "SHAP",
    ],
    image: "/images/projects/diabetes-ai.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "Flagship AI/ML",
    color: "from-blue-600 to-violet-600",
  },
  {
    id: 2,
    title: "Study Assistant – RAG Chatbot",
    description:
      "An AI-powered study assistant that allows users to interact with personal documents and receive context-aware answers using Retrieval-Augmented Generation.",
    technologies: [
      "Python",
      "Flask",
      "Gemini API",
      "RAG",
      "Qdrant",
      "Embeddings",
      "PDF Processing",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/images/projects/rag-study-assistant.png",
    github: "GITHUB_URL_HERE",
    demo: "LIVE_DEMO_URL_HERE",
    badge: "Generative AI & RAG",
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    title:
      "Smart Learning System for Artificial Intelligence and Machine Learning",
    description:
      "An intelligent learning platform designed to help students learn AI and Machine Learning through modules, videos, coding exercises, quizzes, projects and performance tracking.",
    technologies: ["Python", "Machine Learning", "Flask", "SQLite"],
    image: "/images/projects/smart-learning.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "EdTech Platform",
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "ClassMate AI",
    description:
      "An AI-powered educational chatbot that helps students understand academic concepts through an intelligent conversational learning assistant.",
    technologies: ["Python", "Flask", "Gemini API", "Firebase"],
    image: "/images/projects/classmate-ai.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "EdTech Bot",
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: 5,
    title: "FoodieBot AI",
    description:
      "An AI-powered food assistance chatbot that provides food-related information through a conversational interface.",
    technologies: ["Python", "Flask", "Gemini API", "Firebase"],
    image: "/images/projects/foodiebot.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "Culinary AI",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 6,
    title: "Online Complaint Chatbot",
    description:
      "A web-based complaint management system where users can register complaints and track complaint status through an interactive chatbot-based interface.",
    technologies: ["Python", "Flask", "Firebase", "Gemini API"],
    image: "/images/projects/complaint-chatbot.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "Ticketing System",
    color: "from-rose-600 to-pink-600",
  },
  {
    id: 7,
    title: "JobMate AI",
    description:
      "An AI-powered chatbot designed to assist users with job-related information and career guidance.",
    technologies: ["Python", "Flask", "Gemini API"],
    image: "/images/projects/jobmate-ai.png",
    github: "GITHUB_URL_HERE",
    demo: null,
    badge: "Career Tech",
    color: "from-teal-600 to-cyan-600",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Sir Isaac Newton College of Engineering and Technology",
    period: "2021 – 2025 (Expected)",
    status: "4th Year — Currently Pursuing",
    description:
      "Comprehensive curriculum focused on Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Cloud Computing Architectures, and Applied Machine Learning.",
    highlights: [
      "AI & Neural Networks",
      "Cloud Infrastructure",
      "Enterprise .NET Systems",
    ],
  },
];

export const certifications = [
  {
    name: "Certification Name",
    organization: "Issuing Organization",
    date: "Date",
    credentialUrl: "#",
    placeholder: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
