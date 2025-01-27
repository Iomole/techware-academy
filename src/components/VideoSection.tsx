import { Play } from "lucide-react";
import { Button } from "./ui/button";

const VideoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-techware-dark mb-4">
            See What Makes Us Different
          </h2>
          <p className="text-gray-600 mb-8">
            Watch our introduction video to learn about our unique approach to tech education
          </p>
        </div>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Course preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full w-16 h-16 p-0 border-2 border-white bg-white/20 hover:bg-white/30 text-white"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;