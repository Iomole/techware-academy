export interface CourseModule {
  title: string;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: "professional" | "foundational";
  image: string;
  schedule?: string;
  modules: CourseModule[];
}

export const courses: Course[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Master data analysis with Python, SQL, and visualization tools including Excel, Power BI, and advanced analytics techniques.",
    duration: "6 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    modules: [
      {
        title: "Excel for Analytics",
        content: "Introduction to Excel, Data Manipulation & Cleansing, Data Modeling, Analysis, and Visualization"
      },
      {
        title: "Power BI for Business Intelligence",
        content: "Introduction to Power BI, Data Analysis & DAX, Data Visualization, Publishing to Power BI Service"
      },
      {
        title: "SQL Fundamentals",
        content: "Introduction to Databases, SQL Statements, Aggregate Functions, Joins, Database Creation"
      }
    ]
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Web Development",
    description: "Comprehensive training in both front-end and back-end development, covering HTML, CSS, JavaScript, and server-side technologies.",
    duration: "6 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    modules: [
      {
        title: "Front-end Development",
        content: "HTML, CSS, JavaScript, Responsive Design, Modern Frameworks"
      },
      {
        title: "Back-end Development",
        content: "Server-side Programming, Databases, APIs, Authentication"
      },
      {
        title: "Version Control & Deployment",
        content: "Git, CI/CD, Cloud Deployment, Best Practices"
      }
    ]
  },
  {
    id: "frontend-development",
    title: "Front-end Development",
    description: "Master modern front-end development with HTML, CSS, JavaScript, and popular frameworks like React.",
    duration: "4 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4",
    modules: [
      {
        title: "Web Fundamentals",
        content: "HTML5, CSS3, Responsive Design, Web Accessibility"
      },
      {
        title: "JavaScript & Frameworks",
        content: "Modern JavaScript, React, State Management, API Integration"
      },
      {
        title: "Advanced Topics",
        content: "Performance Optimization, Testing, Modern Build Tools"
      }
    ]
  },
  {
    id: "backend-development",
    title: "Back-end Development",
    description: "Learn server-side programming, databases, APIs, and deployment strategies for robust web applications.",
    duration: "4 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    modules: [
      {
        title: "Server-side Programming",
        content: "Node.js, Express.js, RESTful APIs, Authentication"
      },
      {
        title: "Databases",
        content: "SQL, NoSQL, Database Design, Data Modeling"
      },
      {
        title: "DevOps & Deployment",
        content: "Cloud Services, Docker, CI/CD, Monitoring"
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Learn to create intuitive and engaging user interfaces with modern design principles and tools.",
    duration: "4 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    modules: [
      {
        title: "Design Fundamentals",
        content: "Design Principles, Color Theory, Typography, Layout"
      },
      {
        title: "UX Research & Strategy",
        content: "User Research, Wireframing, Prototyping, Usability Testing"
      },
      {
        title: "UI Design Tools",
        content: "Figma, Adobe XD, Design Systems, Component Libraries"
      }
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Master the fundamentals of cybersecurity, including network security, threat analysis, and security operations.",
    duration: "6 months",
    level: "Professional",
    category: "professional",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    modules: [
      {
        title: "Security Fundamentals",
        content: "Network Security, Cryptography, Security Protocols"
      },
      {
        title: "Threat Detection",
        content: "Vulnerability Assessment, Penetration Testing, Security Tools"
      },
      {
        title: "Security Operations",
        content: "Incident Response, Security Monitoring, Compliance"
      }
    ]
  },
  // Keep existing foundational courses
  {
    id: "excel-data-analysis",
    title: "Excel for Data Analysis",
    description: "Learn practical Microsoft Excel skills for data analysis and visualization.",
    duration: "3 weeks",
    level: "Foundational",
    category: "foundational",
    schedule: "Tuesdays, Thursdays, and Fridays",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    modules: [
      {
        title: "Excel Basics",
        content: "Introduction to Excel environment, Data Validation"
      },
      {
        title: "Data Analysis",
        content: "Data Manipulation, Analysis Techniques, Visualization"
      },
      {
        title: "Projects",
        content: "Hands-on projects applying learned concepts"
      }
    ]
  }
];

export const advantages = [
  {
    title: "Flexible Learning",
    description: "Choose between online and physical learning options"
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry professionals with dedicated support"
  },
  {
    title: "Hands-on Projects",
    description: "Apply your knowledge through real-world projects"
  },
  {
    title: "Recorded Lectures",
    description: "Access course content at your convenience"
  }
];
