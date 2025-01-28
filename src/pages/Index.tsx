import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PopularCourses />
      <VideoSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;