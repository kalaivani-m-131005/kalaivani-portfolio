export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  selectedTag?: boolean;
}

export interface Project {
  title: string;
  technologies: string[];
  points: string[];
  problem: string;
  solution: string;
  features: string[];
  contribution: string[];
}

export interface Achievement {
  title: string;
  detail?: string;
  year?: string;
  iconType: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  score: string;
  scoreLabel: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year?: string;
  score?: string;
  file?: string;
}

export interface ResumeData {
  hero: {
    name: string;
    titles: string[];
    subtitle: string;
    cgpa: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  internships: Internship[];
  project: Project;
  researchAndPatent: {
    patent: {
      title: string;
      patentNo: string;
      status: string;
    };
    publication: {
      title: string;
      presentedAt: string;
      indexType: string;
    };
  };
  achievements: Achievement[];
  education: EducationItem[];
  certifications: Certification[];
  languages: string[];
  contact: {
    email: string;
    location: string;
    phone: string;
    socials: {
      platform: string;
      placeholderUrl: string;
    }[];
  };
}

export const resumeData: ResumeData = {
  hero: {
    name: "KALAIVANI M.",
    titles: [
      "Software Developer",
      "Java Developer",
      "AI & Data Analytics Enthusiast"
    ],
    subtitle: "Final-year Computer Science and Engineering student",
    cgpa: "9.14 / 10",
    primaryCtaText: "EXPLORE MY WORK",
    secondaryCtaText: "VIEW RESUME"
  },
  summary: "Final-year Computer Science and Engineering student (CGPA: 9.14) with expertise in Java, Full-Stack Development, Artificial Intelligence, and Data Analytics. Experienced through multiple internships, published patent author, and Scopus-indexed research contributor. Recognized as a Google Gemini Student Ambassador, combining technical depth with innovation, leadership, and research excellence. Passionate about building scalable, data-driven, and user-focused technology solutions.",
  skills: [
    {
      category: "Languages",
      items: ["Java", "C", "JavaScript", "SQL"]
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "React.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"]
    },
    {
      category: "Core CS",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Computer Networks"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Eclipse IDE", "MongoDB Compass"]
    },
    {
      category: "AI & Analytics",
      items: ["Artificial Intelligence", "Prompt Engineering", "Data Analytics"]
    }
  ],
  internships: [
    {
      id: "cognetix",
      role: "Data Analytics Intern",
      company: "Cognetix",
      period: "May 2026 – Jun 2026",
      description: "Worked on data cleaning, analysis, and interpretation to derive actionable insights and support decision-making."
    },
    {
      id: "infosys",
      role: "AI Intern (Selected)",
      company: "Infosys Springboard",
      period: "2026",
      selectedTag: true,
      description: "Selected for AI internship program and gained exposure to machine learning concepts and real-world AI applications."
    },
    {
      id: "codetech",
      role: "Java Intern",
      company: "Codetech IT Solutions",
      period: "Sep 2025 – Oct 2025",
      description: "Developed Java applications using OOP principles with focus on debugging, testing, and code optimization."
    },
    {
      id: "pumo",
      role: "MERN Stack Intern",
      company: "Pumo Technovation",
      period: "Jun 2025 – Jul 2025",
      description: "Built full-stack web applications using MERN stack with REST API integration and frontend-backend connectivity."
    }
  ],
  project: {
    title: "AI-Powered Career Accelerator Platform",
    technologies: ["MERN Stack", "TypeScript", "Socket.io", "MongoDB Atlas", "Gemini API"],
    points: [
      "Developed a full-stack AI-powered career platform using MERN Stack with JWT authentication, role-based access control, and job management features.",
      "Integrated AI-based resume analysis, mock interviews, and real-time communication while building scalable RESTful APIs and MongoDB databases."
    ],
    problem: "Job seekers often face fragmented career tools, lack personalized resume feedback, and lack realistic interactive practice for technical and behavioral interviews.",
    solution: "A unified AI-driven career platform combining intelligent resume parsing, dynamic mock interviews, real-time messaging, and structured job management.",
    features: [
      "AI-Based Resume Analysis & Optimization",
      "Interactive Mock Interviews Powered by Gemini API",
      "Real-time Instant Communication via Socket.io",
      "JWT Authentication & Role-Based Access Control",
      "Comprehensive Job Management Dashboard",
      "Scalable RESTful API & MongoDB Atlas Data Layer"
    ],
    contribution: [
      "Architected the full-stack MERN application structure with TypeScript.",
      "Built secure JWT authentication and role-based permissions.",
      "Integrated Gemini API for dynamic AI feedback during mock interview sessions.",
      "Designed and configured scalable MongoDB Atlas database schemas.",
      "Implemented real-time bidirectional messaging features with Socket.io."
    ]
  },
  researchAndPatent: {
    patent: {
      title: "Health Emergency Identification and Response System",
      patentNo: "202541025866 A",
      status: "Published Patent Application"
    },
    publication: {
      title: "Health Emergency Identification and Response System: Revolutionizing Emergency Healthcare with AI and Biometrics",
      presentedAt: "ICRDICCT'25",
      indexType: "Scopus-Indexed Research Contributor"
    }
  },
  achievements: [
    {

      title: "Google Gemini Student Ambassador (2026)",
      iconType: "gemini"
    }
    ,
    {
      title: "Presented research at ICRDICCT'25 International Conference",
      detail: "Presented Scopus-indexed research paper on AI and Biometrics emergency healthcare systems.",
      iconType: "presentation"
    },
    {
      title: "Main Coordinator – LOGOZO, INFIQ 2K26",
      detail: "Led main event coordination and management for LOGOZO in INFIQ 2K26.",
      iconType: "leadership"
    },
    {
      title: "Paper Presentation at Sri Eshwar THIRAN 2025",
      detail: "Presented technical research paper at Sri Eshwar THIRAN 2025.",
      iconType: "paper"
    },
    {
      title: "Project Presentation at CMRIT Bangalore",
      detail: "Demonstrated technical project innovation at CMRIT Bangalore platform.",
      iconType: "project"
    },
    {
      title: "Certificate of Appreciation for 100% Attendance",
      detail: "Awarded Certificate of Appreciation for exemplary academic discipline and 100% attendance.",
      iconType: "award"
    }
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "V.S.B. College of Engineering Technical Campus, Coimbatore",
      period: "2023 – 2027",
      score: "9.14 / 10",
      scoreLabel: "CGPA"
    },
    {
      degree: "HSC",
      institution: "Government Higher Secondary School, Coimbatore",
      score: "83.5%",
      scoreLabel: "Percentage"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "NPTEL Elite – Cloud Computing and Distributed Systems",
      issuer: "NPTEL",
      score: "71%"
    },
    {
      id: 2,
      title: "Gemini Certified University Student",
      issuer: "Google for Education",
      year: "2026",
      file: "cert-2.png"
    },
    {
      id: 3,
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      file: "cert-3.png"
    },
    {
      id: 4,
      title: "Prompt Engineering",
      issuer: "Infosys Springboard",
      file: "cert-4.png"
    },
    {
      id: 5,
      title: "ServiceNow Virtual Internship Program",
      issuer: "ServiceNow",
      year: "2026",
      file: "cert-5.png"
    },
    {
      id: 6,
      title: "Computer Application Course",
      issuer: "Outbox Training (Offline)",
      file: "cert-6.png"
    }
  ],
  languages: [
    "Tamil",
    "English"
  ],
  contact: {
    email: "kalaimayilsamy13@gmail.com",
    location: "Coimbatore, Tamil Nadu",
    phone: "9976775973",
    socials: [
      {
        platform: "GitHub",
        placeholderUrl: "https://github.com/kalaivani-m-131005/"
      },
      {
        platform: "LinkedIn",
        placeholderUrl: "https://www.linkedin.com/in/kalaivani-m-488905352/"
      },
      {
        platform: "LeetCode",
        placeholderUrl: "https://leetcode.com/u/MKalaivani/"
      },
      {
        platform: "HackerRank",
        placeholderUrl: "https://www.hackerrank.com/profile/kalaimayilsamy13"
      }
    ]
  }
};
