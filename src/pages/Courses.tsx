import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, GraduationCap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courseData";
import Footer from "@/components/Footer";

const Courses = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "professional" | "foundational">("all");

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-techware-gray">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-techware-dark mb-4">
            Our Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional and foundational courses
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="animate-fadeIn"
            >
              All Courses
            </Button>
            <Button
              variant={selectedCategory === "professional" ? "default" : "outline"}
              onClick={() => setSelectedCategory("professional")}
              className="animate-fadeIn delay-100"
            >
              Professional Training
            </Button>
            <Button
              variant={selectedCategory === "foundational" ? "default" : "outline"}
              onClick={() => setSelectedCategory("foundational")}
              className="animate-fadeIn delay-200"
            >
              Foundational Courses
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
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
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-primary" />
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.level}
                  </div>
                </div>
                {course.schedule && (
                  <div className="mt-2 text-sm text-gray-500">
                    Schedule: {course.schedule}
                  </div>
                )}
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
      </div>
      <Footer />
    </div>
  );
};

export default Courses;