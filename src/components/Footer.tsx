import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/a641b89d-f1a9-4054-b7b3-4c1b9a56ae9c.png" 
              alt="Techware Academy Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300">
              Empowering the next generation of tech professionals through innovative education.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/enroll" className="text-gray-300 hover:text-primary transition-colors">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">academy@techware.ng</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-300">+2348075512002</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Techware Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;