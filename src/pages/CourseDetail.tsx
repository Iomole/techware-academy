import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Award, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const courseData = {
  "data-analytics": {
    title: "Data Analytics",
    description: "Master data analysis with Python, SQL, and visualization tools. Learn to transform raw data into actionable insights that drive business decisions.",
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    modules: [
      {
        title: "Introduction to Data Analytics",
        content: "Fundamentals of data analysis, statistical concepts, and industry overview"
      },
      {
        title: "Python for Data Analysis",
        content: "Data manipulation with Pandas, NumPy, and data visualization with Matplotlib"
      },
      {
        title: "SQL and Database Management",
        content: "Database design, SQL queries, and data extraction techniques"
      },
      {
        title: "Advanced Analytics Tools",
        content: "Power BI, Tableau, and advanced visualization techniques"
      }
    ]
  },
  "full-stack-development": {
    title: "Full-Stack Development",
    description: "Build complete web applications from front to back end. Master modern frameworks and deployment techniques.",
    duration: "6 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    modules: [
      {
        title: "Frontend Development",
        content: "HTML5, CSS3, JavaScript, React.js, and responsive design"
      },
      {
        title: "Backend Development",
        content: "Node.js, Express.js, and RESTful API development"
      },
      {
        title: "Database Management",
        content: "MongoDB, PostgreSQL, and database design principles"
      },
      {
        title: "DevOps and Deployment",
        content: "Git, CI/CD, cloud deployment, and best practices"
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies and tools to drive online success.",
    duration: "3 months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    modules: [
      {
        title: "Digital Marketing Fundamentals",
        content: "Marketing principles, digital channels, and strategy development"
      },
      {
        title: "Social Media Marketing",
        content: "Platform strategies, content creation, and community management"
      },
      {
        title: "SEO and Content Marketing",
        content: "Search optimization, content strategy, and analytics"
      },
      {
        title: "Paid Advertising",
        content: "PPC campaigns, social media ads, and performance tracking"
      }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from cyber threats with comprehensive security training.",
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    modules: [
      {
        title: "Security Fundamentals",
        content: "Basic security concepts, threat landscape, and security frameworks"
      },
      {
        title: "Network Security",
        content: "Network protocols, firewalls, and intrusion detection systems"
      },
      {
        title: "Ethical Hacking",
        content: "Penetration testing, vulnerability assessment, and security tools"
      },
      {
        title: "Security Operations",
        content: "Incident response, forensics, and security management"
      }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user experiences and beautiful interfaces.",
    duration: "4 months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    modules: [
      {
        title: "Design Fundamentals",
        content: "Color theory, typography, and design principles"
      },
      {
        title: "User Experience Design",
        content: "User research, wireframing, and prototyping"
      },
      {
        title: "UI Design",
        content: "Interface design, component libraries, and design systems"
      },
      {
        title: "Design Tools",
        content: "Figma, Adobe XD, and prototyping tools"
      }
    ]
  },
  "cloud-computing": {
    title: "Cloud Computing",
    description: "Learn to build and manage cloud infrastructure with hands-on training.",
    duration: "5 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    modules: [
      {
        title: "Cloud Fundamentals",
        content: "Cloud concepts, services, and deployment models"
      },
      {
        title: "AWS Services",
        content: "EC2, S3, Lambda, and other core AWS services"
      },
      {
        title: "Cloud Security",
        content: "Security best practices, compliance, and identity management"
      },
      {
        title: "DevOps in Cloud",
        content: "Infrastructure as Code, containerization, and orchestration"
      }
    ]
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courseData[courseId as keyof typeof courseData];
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Course not found</h1>
          <Button onClick={() => navigate('/courses')} className="mt-8">
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              onClick={() => navigate('/courses')}
              className="mb-6 text-white border-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2" /> Back to Courses
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
            <Clock className="text-primary h-8 w-8" />
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p>{course.duration}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
            <Users className="text-primary h-8 w-8" />
            <div>
              <h3 className="font-semibold">Level</h3>
              <p>{course.level}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
            <Award className="text-primary h-8 w-8" />
            <div>
              <h3 className="font-semibold">Certificate</h3>
              <p>Upon Completion</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" /> Course Modules
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {course.modules.map((module, index) => (
              <AccordionItem key={index} value={`module-${index}`}>
                <AccordionTrigger className="text-lg">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            Enroll Now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
