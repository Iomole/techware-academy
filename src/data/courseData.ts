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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
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
    title: "Full-Stack Development",
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
  // ... Additional courses can be added here
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