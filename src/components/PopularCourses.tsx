import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courseData";

const PopularCourses = () => {
  const navigate = useNavigate();
  const popularCourses = courses.slice(0, 3); // Show first 3 courses

  const handleViewAllCourses = () => {
    navigate('/courses');
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your tech journey with our most in-demand programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  Duration: {course.duration}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleViewAllCourses}
            className="hover:scale-105 transition-transform duration-300"
          >
            View All Courses <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;