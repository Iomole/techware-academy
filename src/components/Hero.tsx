import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-techware-gray min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-techware-red/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-techware-dark mb-6 animate-fadeIn">
            Transform Your Future with{" "}
            <span className="text-techware-red">Tech Skills</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary mb-8 animate-fadeIn">
            Join Techware Academy's 2025 programs and master the skills that drive
            innovation. From Data Analytics to Cybersecurity, we've got your future
            covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
            <Button
              className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg flex items-center gap-2"
              onClick={() => navigate('/courses')}
            >
              Explore Courses <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;