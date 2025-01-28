import { BookOpen, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Project-Based Learning",
    description: "Learn by doing with real-world projects and practical assignments"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals throughout your journey"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Industry Certification",
    description: "Earn recognized certifications valued by top employers"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace with our flexible learning options"
  }
];

const Features = () => {
  return (
    <div className="bg-techware-gray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            The Techware Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What sets us apart in delivering quality tech education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-primary mb-4 animate-bounce">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-techware-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;