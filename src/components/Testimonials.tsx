import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import victorImage from "@/assets/victor-okeke.png";
import umarImage from "@/assets/umar-farouk.png";

const testimonials = [
  {
    name: "Victor Okeke",
    role: "Data Analyst Facilitator",
    content: "Empowering learners with practical data analytics skills and real-world insights to excel in their careers.",
    rating: 5,
    image: victorImage
  },
  {
    name: "Umar Farouk",
    role: "Full-stack Web Development/Devops Facilitator",
    content: "Guiding aspiring developers through modern web technologies and DevOps practices for successful tech careers.",
    rating: 5,
    image: umarImage
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated facilitators who are transforming careers through Techware Academy
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in mx-4">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-techware-dark">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;