import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Target } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-techware-gray">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-techware-dark mb-4">
            About Techware Academy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation of tech professionals through innovative education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, high-quality tech education that transforms careers
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading platform for tech education in Africa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Excellence, Innovation, and Student Success
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-techware-dark mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, Techware Academy emerged from a vision to bridge the tech skills gap in Africa. We recognized the need for practical, industry-relevant training that would prepare students for real-world tech careers.
          </p>
          <p className="text-gray-600">
            Today, we're proud to have helped hundreds of students transform their careers and achieve their dreams in the tech industry. Our commitment to excellence and innovation continues to drive us forward as we expand our course offerings and reach more aspiring tech professionals.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-techware-dark mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Industry-Led Curriculum</h3>
              <p className="text-gray-600 mb-6">
                Our courses are designed and updated regularly with input from industry experts to ensure relevance.
              </p>
              <h3 className="text-xl font-semibold mb-3">Practical Learning</h3>
              <p className="text-gray-600">
                Learn through hands-on projects and real-world applications, not just theory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600 mb-6">
                Learn from experienced professionals who bring real-world expertise to the classroom.
              </p>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Get guidance on your career path and connect with industry opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
