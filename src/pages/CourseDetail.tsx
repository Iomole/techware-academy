import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { courses, type Course } from "@/data/courseData";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find((c) => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Button onClick={() => navigate('/courses')} variant="default">
            <ArrowLeft className="mr-2" /> Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const learningOutcomes = [
    "Gain practical, hands-on experience through real-world projects",
    "Learn industry-standard tools and best practices",
    "Develop problem-solving and analytical skills",
    "Build a portfolio of work to showcase to employers",
    "Receive mentorship from industry professionals"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              onClick={() => navigate('/courses')}
              className="mb-6 text-white border-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2" /> Back to Courses
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
              {course.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fadeIn delay-100">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Course Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fadeIn delay-200">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <Clock className="text-primary h-8 w-8" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>{course.duration}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <Users className="text-primary h-8 w-8" />
              <div>
                <h3 className="font-semibold">Level</h3>
                <p>{course.level}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <Award className="text-primary h-8 w-8" />
              <div>
                <h3 className="font-semibold">Certificate</h3>
                <p>Upon Completion</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Course Modules */}
          <div className="md:col-span-2 animate-fadeIn delay-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-primary" /> Course Modules
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger className="text-lg hover:text-primary">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Learning Outcomes */}
          <div className="animate-fadeIn delay-400">
            <h2 className="text-2xl font-bold mb-6">Learning Outcomes</h2>
            <ul className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary h-5 w-5 mt-1 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enroll CTA */}
        <div className="text-center animate-fadeIn delay-500">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/enroll')}
          >
            Enroll Now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;