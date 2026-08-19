/**
 * Centralized Portfolio Data for Manpreet Singh
 * Frontend-only data structure - All portfolio information is managed here.
 */

export const personalInfo = {
  name: "MANPREET SINGH",
  firstName: "Manpreet",
  lastName: "Singh",
  role: "STUDENT DEVELOPER",
  tagline: "Building modern, responsive, and performant web applications with clean code & intuitive design.",
  college: "Swami Vivekanand Institute of Engineering and Technology",
  collegeShort: "SVIET",
  location: "Chandigarh, India",
  email: "iammanpreet640@gmail.com",
  github: "https://github.com/mxnpreet7",
  linkedin: "https://www.linkedin.com/in/manpreet-singh-7063703b2/",
  resumeUrl: "#contact", // Can be replaced with direct PDF link or file path
  availableForWork: true,
  statusText: "Available for Internships & Junior Roles",
};

export const aboutData = {
  title: "About Me",
  subtitle: "A brief look into my background, technical drive, and what I build.",
  paragraphs: [
    "I am Manpreet Singh, a passionate Student Developer currently pursuing my degree at Swami Vivekanand Institute of Engineering and Technology (SVIET), based in Chandigarh, India.",
    "My technical focus centers around modern frontend web development, user interface design, and writing clean, scalable code. I enjoy turning complex problem statements into elegant, intuitive, and accessible digital experiences using React and modern CSS systems.",
    "Currently, I am actively expanding my skillset in advanced React design patterns, state management, component architecture, and JavaScript optimization while strengthening my core problem-solving fundamentals in Java, C++, and Python.",
    "I build responsive web applications, interactive UI components, and developer-centric projects with a focus on speed, accessibility, and visual polish. My goal is to contribute to high-impact engineering teams as a frontend engineer intern or junior developer."
  ],
  highlights: [
    {
      label: "Role",
      value: "Student Developer",
      icon: "Code2"
    },
    {
      label: "College",
      value: "SVIET",
      detail: "Swami Vivekanand Institute",
      icon: "GraduationCap"
    },
    {
      label: "Location",
      value: "Chandigarh, India",
      icon: "MapPin"
    },
    {
      label: "Focus",
      value: "React & Modern Web",
      icon: "Sparkles"
    }
  ]
};

export const skillsData = {
  title: "Skills & Technologies",
  subtitle: "Technologies, frameworks, and developer tools I work with daily.",
  categories: [
    {
      name: "Languages",
      description: "Core programming and scripting languages for building software and logic.",
      icon: "Terminal",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      skills: [
        { name: "JavaScript", level: "Intermediate", tag: "ES6+", icon: "Code" },
        { name: "Python", level: "Intermediate", tag: "Core", icon: "Code" },
        { name: "Java", level: "Foundational", tag: "OOP", icon: "Code" },
        { name: "C++", level: "Foundational", tag: "Logic & DSA", icon: "Code" }
      ]
    },
    {
      name: "Frontend",
      description: "Building responsive, modern, and high-performance user interfaces.",
      icon: "Layout",
      color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
      skills: [
        { name: "React.js", level: "Proficient", tag: "Hooks & SPA", icon: "Boxes" },
        { name: "Tailwind CSS", level: "Proficient", tag: "Styling", icon: "Palette" },
        { name: "HTML5", level: "Proficient", tag: "Semantic Web", icon: "FileCode" },
        { name: "CSS3", level: "Proficient", tag: "Flex/Grid & Animations", icon: "Layers" }
      ]
    },
    {
      name: "Tools & Workflow",
      description: "Development environments, version control, and design workflows.",
      icon: "Wrench",
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      skills: [
        { name: "Git", level: "Proficient", tag: "Version Control", icon: "GitBranch" },
        { name: "GitHub", level: "Proficient", tag: "Collaboration", icon: "Github" },
        { name: "VS Code", level: "Proficient", tag: "IDE & Tooling", icon: "Laptop" },
        { name: "Figma", level: "Intermediate", tag: "UI/UX Design", icon: "Figma" }
      ]
    }
  ]
};

export const projectsData = {
  title: "Featured Projects",
  subtitle: "A selection of web applications and developer tools I've built.",
  projects: [
    {
      id: "project-1",
      name: "Personal Portfolio Website",
      description: "A modern, highly responsive developer portfolio built with React and Tailwind CSS. Features dark/light themes, smooth section transitions, dynamic skill catalogs, interactive contact hub, and mobile-first architecture.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Lucide React", "Vite"],
      github: "https://github.com/mxnpreet7",
      liveDemo: "https://mxnpreet7.github.io",
      featured: true,
      category: "Frontend Application",
      imageGradient: "from-indigo-600 via-purple-600 to-pink-600",
      stats: "Interactive UI • Mobile First"
    },
    {
      id: "project-2",
      name: "Responsive Web Applications Hub",
      description: "A suite of responsive frontend interfaces and components showcasing clean layout architectures, interactive UI elements, dynamic state management, and modern CSS utility patterns.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/mxnpreet7",
      liveDemo: "https://github.com/mxnpreet7",
      featured: true,
      category: "UI/UX & Web Dev",
      imageGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      stats: "Modern Components • Reusable"
    },
    {
      id: "project-3",
      name: "Algorithm & Logic Showcase",
      description: "Algorithmic problem-solving implementations and data structure explorations written in C++, Java, and Python. Demonstrating clean code practices, logic efficiency, and modular code structures.",
      techStack: ["C++", "Java", "Python", "Git", "VS Code"],
      github: "https://github.com/mxnpreet7",
      liveDemo: "https://github.com/mxnpreet7",
      featured: false,
      category: "Core Computer Science",
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      stats: "Algorithms • Clean Logic"
    }
  ]
};

export const educationData = {
  title: "Education",
  subtitle: "Academic journey and foundation in computer science and engineering.",
  timeline: [
    {
      degree: "Bachelor of Technology / Computer Science Studies",
      institution: "Swami Vivekanand Institute of Engineering and Technology (SVIET)",
      location: "Chandigarh, India",
      duration: "Undergraduate Program",
      status: "In Progress",
      description: "Focused on core computer science foundations, software engineering principles, algorithms, data structures, and web technologies.",
      highlights: [
        "Core Coursework: Object-Oriented Programming (Java/C++), Data Structures & Algorithms",
        "Frontend & Web Technologies: HTML5, CSS3, JavaScript, Responsive Design",
        "Active member of tech study circles and student developer communities"
      ]
    }
  ]
};

// Achievements section is kept empty to avoid any unverified claims as per instructions.
export const achievementsData = {
  title: "Achievements & Certifications",
  subtitle: "Recognitions, awards, and milestones.",
  items: []
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
