import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "Data Analytics",
    description: "Master data analysis with Python, SQL, and visualization tools",
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Full-Stack Development",
    description: "Build complete web applications from front to back end",
    duration: "6 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies and tools",
    duration: "3 months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from cyber threats",
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user experiences",
    duration: "4 months",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Cloud Computing",
    description: "Learn to build and manage cloud infrastructure",
    duration: "5 months",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-techware-gray">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-techware-dark mb-4">
            Our Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of tech courses designed to help you succeed in the digital age
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => navigate(`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
