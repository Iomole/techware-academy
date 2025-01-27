import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const courses = [
  {
    title: "Data Analytics",
    description: "Master data analysis with Python, SQL, and visualization tools",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Full-Stack Development",
    description: "Build complete web applications from front to back end",
    duration: "6 months",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies and tools",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  }
];

const PopularCourses = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your tech journey with our most in-demand programs
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
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  Duration: {course.duration}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Courses <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;