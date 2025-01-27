import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import PopularCourses from "@/components/PopularCourses";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <VideoSection />
      <PopularCourses />
    </div>
  );
};

export default Index;