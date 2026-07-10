export type Project = {
  slug: string;
  title: string;
  subtitle: string;

  overview: string;
  problem: string;
  solution: string;

  features: string[];
  architecture: string;

metrics: {
  label: string;
  value: string;
}[];

challenges: string[];

learnings: string[];
responsibilities: string[];
  tech: string;

  github: string;
  live: string;

  year: string;
  status: "Completed" | "In Progress";

duration: string;
team: string;
role: string;
};

export const projects: Project[] = [
  {
    slug: "url-shortener-api",

    title: "URL Shortener API",

    subtitle:
      "Production-ready REST API built with Node.js, Express and PostgreSQL.",

    overview:
      "A scalable URL shortening platform designed with clean architecture, validation, authentication and production-ready practices.",

    problem:
      "Sharing long URLs is inconvenient and difficult to manage. Existing solutions often don't demonstrate backend engineering concepts for learning purposes.",

    solution:
      "Built a RESTful API that generates short URLs, validates requests, supports redirects and follows production-ready backend development practices.",

    architecture:
  "Layered architecture with route, controller, service and database layers following REST principles.",
    
  features: [
      "Short URL generation",
      "Redirect endpoint",
      "RESTful API",
      "Input validation",
      "Production-ready architecture",
      "Docker support"
    ],

    tech: "Node.js • Express • PostgreSQL • Prisma • Docker",
    
    metrics: [
  {
    label: "REST Endpoints",
    value: "8+",
  },
  {
    label: "Database",
    value: "PostgreSQL",
  },
  {
    label: "ORM",
    value: "Prisma",
  },
  {
    label: "Containerized",
    value: "Docker",
  },
  {
    label: "Architecture",
    value: "Layered",
  },
],

challenges: [
  "Designing a scalable URL generation strategy.",
  "Implementing proper validation for malformed URLs.",
  "Structuring the backend using clean architecture.",
],

learnings: [
  "Building production-ready REST APIs.",
  "Working with Prisma ORM and PostgreSQL.",
  "Designing scalable backend architecture.",
],

responsibilities: [
  "Designed the backend architecture.",
  "Developed REST APIs using Express.js.",
  "Integrated PostgreSQL with Prisma ORM.",
  "Implemented URL validation and error handling.",
  "Containerized the application using Docker.",
],

    github: "https://github.com/Blessy-K/url-shortener-api",

    live: "",

    year: "2026",

    status: "Completed",

    duration: "2 Weeks",

    team: "Individual Project",

    role: "Backend Developer",
  },
  {
  slug: "ai-powered-research-analyzer",

  title: "AI Powered Research Analyzer",

  subtitle:
    "AI-powered research analysis platform using LLM APIs and Streamlit.",

  overview:
    "An intelligent research assistant that analyzes documents and generates meaningful insights using Large Language Models.",

  problem:
    "Researchers spend significant time reading and summarizing large amounts of information manually, making knowledge extraction slow and inefficient.",

  solution:
    "Built an AI-powered application that processes research content, uses LLM capabilities for analysis, and presents structured insights through an interactive interface.",

  architecture:
    "Streamlit-based frontend integrated with Python backend logic and LLM APIs for intelligent content processing and response generation.",

  features: [
    "AI-based document analysis",
    "LLM-powered insights generation",
    "Interactive Streamlit interface",
    "Automated research summarization",
    "Fast information extraction"
  ],

  tech: "Python • Streamlit • LLM APIs",

  metrics: [
    {
      label: "AI Integration",
      value: "LLM APIs",
    },
    {
      label: "Interface",
      value: "Streamlit",
    },
    {
      label: "Language",
      value: "Python",
    },
    {
      label: "Automation",
      value: "AI Assisted Analysis",
    },
  ],

  challenges: [
    "Integrating LLM APIs effectively.",
    "Designing prompts for meaningful outputs.",
    "Handling unstructured research information.",
  ],

  learnings: [
    "Working with generative AI applications.",
    "Understanding LLM-based workflows.",
    "Building AI-powered user experiences.",
  ],

  responsibilities: [
    "Developed the AI analysis workflow.",
    "Integrated LLM APIs.",
    "Designed the Streamlit interface.",
    "Implemented research processing logic.",
  ],

  github: "https://github.com/Blessy-K/AI-Powered-Research-Analyzer",

  live: "",

  year: "2025",

  status: "Completed",

  duration: "3 Weeks",

  team: "Individual Project",

  role: "AI Developer",
},
{
  slug: "Unified URL and QR Phishing Detection",

  title: "Unified URL and QR Phishing Detection",

  subtitle:
    "Unified QR and URL based phishing detection framework using machine learning.",

  overview:
    "A security-focused fraud detection platform that identifies malicious URLs and QR-based phishing attempts using machine learning techniques.",

  problem:
    "Cybercriminals increasingly use malicious links and QR codes for phishing attacks, making manual verification difficult for users.",

  solution:
    "Developed a machine learning-based detection system that analyzes URLs and QR codes to identify potential phishing threats.",

  architecture:
    "Full-stack architecture with HTML/CSS/JavaScript frontend, Flask backend, machine learning models and QR processing pipeline.",

  features: [
    "URL phishing detection",
    "QR code analysis",
    "Machine learning classification",
    "Web-based interface",
    "Automated threat identification"
  ],

  tech: "Python • Flask • Scikit-learn • Pandas • OpenCV",

  metrics: [
    {
      label: "Detection Types",
      value: "URL + QR",
    },
    {
      label: "ML Framework",
      value: "Scikit-learn",
    },
    {
      label: "Backend",
      value: "Flask",
    },
    {
      label: "Computer Vision",
      value: "OpenCV",
    },
  ],

  challenges: [
    "Processing different URL patterns.",
    "Building reliable feature extraction.",
    "Integrating QR analysis with detection logic.",
  ],

  learnings: [
    "Applying machine learning to cybersecurity problems.",
    "Building end-to-end ML applications.",
    "Working with data preprocessing pipelines.",
  ],

  responsibilities: [
    "Developed the ML detection workflow.",
    "Built backend APIs using Flask.",
    "Integrated QR processing.",
    "Implemented prediction pipeline.",
  ],

  github: "https://github.com/Blessy-K/Unified-QR-and-URL-Phishing-Detection",

  live: "",

  year: "2026",

  status: "Completed",

  duration: "4 Weeks",

  team: "Individual Project",

  role: "Machine Learning Developer",
},
{
  slug: "automated-email-reply-bot",

  title: "Automated Email Reply Bot",

  subtitle:
    "RPA-based email automation solution using UiPath.",

  overview:
    "An automation workflow that reduces manual email handling by automatically reading, processing and responding to emails.",

  problem:
    "Managing repetitive email responses manually consumes time and reduces productivity.",

  solution:
    "Created an RPA automation workflow that processes incoming emails and generates automated responses based on predefined rules.",

  architecture:
    "UiPath workflow automation architecture integrating email services, decision logic and automated response generation.",

  features: [
    "Email monitoring automation",
    "Automated response generation",
    "Workflow-based processing",
    "Reduced manual effort"
  ],

  tech: "UiPath RPA • Automation",

  metrics: [
    {
      label: "Automation Platform",
      value: "UiPath",
    },
    {
      label: "Process",
      value: "Email Workflow",
    },
  ],

  challenges: [
    "Designing reliable automation workflows.",
    "Handling different email scenarios.",
  ],

  learnings: [
    "Understanding robotic process automation.",
    "Building workflow-based automation solutions.",
  ],

  responsibilities: [
    "Designed UiPath automation workflow.",
    "Configured email processing steps.",
    "Tested automation scenarios.",
  ],

  github: "https://github.com/Blessy-K/uipath-automail-rpa-bot",

  live: "",

  year: "2024",

  status: "Completed",

  duration: "1 Week",

  team: "Individual Project",

  role: "RPA Developer",
},
{
  slug: "redrob-ai-candidate-ranking",

  title: "AI Ranking System for Resume Parsing",

  subtitle:
    "AI-powered candidate ranking system that intelligently matches resumes with job requirements using NLP and semantic search.",

  overview:
    "An AI-based recruitment intelligence platform that analyzes candidate profiles against job descriptions and ranks the most relevant candidates using semantic understanding, feature-based scoring and explainable ranking logic.",

  problem:
    "Traditional resume screening systems rely heavily on keyword matching, causing qualified candidates to be missed while keyword-stuffed profiles receive higher rankings. Recruiters need an intelligent system that understands skills, experience relevance and candidate quality.",

  solution:
    "Built an AI candidate ranking engine that processes resumes and job descriptions, extracts relevant signals, calculates compatibility scores and generates ranked candidate recommendations using NLP-based matching techniques.",

  architecture:
    "Pipeline-based architecture consisting of resume preprocessing, feature extraction, semantic similarity analysis, ranking algorithm and result generation modules. The system combines AI-based matching with rule-based scoring for reliable candidate ranking.",

  features: [
    "Resume parsing and analysis",
    "Job description matching",
    "AI-based candidate ranking",
    "Semantic similarity scoring",
    "Explainable recommendations",
    "Automated ranking output"
  ],

  tech: "Python • NLP • Machine Learning • Semantic Search • Streamlit",

  metrics: [
    {
      label: "Candidates Processed",
      value: "100K+",
    },
    {
      label: "Ranking Approach",
      value: "AI + Feature Scoring",
    },
    {
      label: "Matching Method",
      value: "Semantic Search",
    },
    {
      label: "Output",
      value: "Ranked Candidate List",
    },
    {
      label: "AI Domain",
      value: "Recruitment Intelligence",
    },
  ],

  challenges: [
    "Improving ranking quality beyond keyword matching.",
    "Extracting meaningful signals from unstructured resumes.",
    "Balancing semantic similarity with candidate relevance.",
    "Designing explainable ranking results.",
  ],

  learnings: [
    "Applying NLP techniques to real-world recruitment problems.",
    "Designing AI ranking pipelines.",
    "Working with semantic matching systems.",
    "Building explainable AI applications.",
  ],

  responsibilities: [
    "Designed the candidate ranking workflow.",
    "Implemented resume and job description matching logic.",
    "Developed scoring and ranking mechanisms.",
    "Built the AI-powered analysis pipeline.",
  ],

  github:
    "https://github.com/Blessy-K/redrob-ai-candidate-ranking",

  live: "",

  year: "2026",

  status: "Completed",

  duration: "3 Weeks",

  team: "Individual Project",

  role: "AI/ML Developer",
},
{
  slug: "ai-product-intelligence-system",

  title: "AI Product Intelligence System",

  subtitle:
    "AI-powered product analysis platform that extracts insights from product data using LLM-based intelligence.",

  overview:
    "An AI-driven product intelligence platform designed to analyze product information, generate insights and help users understand product characteristics through automated analysis.",

  problem:
    "Businesses and users often need to analyze large amounts of product information manually, making it difficult to compare products, identify patterns and extract meaningful insights efficiently.",

  solution:
    "Built an AI-powered system that processes product information, applies intelligent analysis techniques and generates structured insights to improve product understanding and decision-making.",

  architecture:
    "Application architecture combining data processing pipelines, AI analysis workflows and interactive user interfaces. The system integrates product data processing with LLM-based intelligence to generate meaningful outputs.",

  features: [
    "AI-based product analysis",
    "Automated insight generation",
    "Product intelligence extraction",
    "Interactive analysis interface",
    "Structured AI responses"
  ],

  tech: "Python • Streamlit • LLM APIs • Data Processing",

  metrics: [
    {
      label: "AI Engine",
      value: "LLM APIs",
    },
    {
      label: "Application Type",
      value: "AI Analytics Platform",
    },
    {
      label: "Interface",
      value: "Streamlit",
    },
    {
      label: "Processing",
      value: "Automated Analysis",
    },
    {
      label: "Domain",
      value: "Product Intelligence",
    },
  ],

  challenges: [
    "Designing effective AI analysis workflows.",
    "Structuring unorganized product information.",
    "Generating reliable and meaningful AI insights.",
  ],

  learnings: [
    "Building practical generative AI applications.",
    "Working with LLM-based workflows.",
    "Designing AI-powered user experiences.",
    "Integrating data processing with AI systems.",
  ],

  responsibilities: [
    "Designed the AI product analysis workflow.",
    "Integrated LLM-based intelligence features.",
    "Developed the application interface.",
    "Implemented data processing logic.",
  ],

  github:
    "https://github.com/Blessy-K/ai-product-intelligence-system",

  live: "",

  year: "2026",

  status: "Completed",

  duration: "3 Weeks",

  team: "Individual Project",

  role: "AI Developer",
},
];