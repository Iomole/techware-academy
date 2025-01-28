import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Analyst at Tech Corp",
    content: "The Data Analytics course completely transformed my career. The practical approach and expert mentorship were invaluable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    content: "Thanks to Techware Academy, I transitioned from a non-tech background to a successful developer role in just 6 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Lisa Rodriguez",
    role: "Digital Marketing Specialist",
    content: "The digital marketing program provided real-world experience and helped me land my dream job.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers through Techware Academy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;