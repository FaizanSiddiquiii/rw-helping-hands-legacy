import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ea55ef47-28a6-4ae7-a471-68359ee78a56.png" 
                alt="RW Helping Hands Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-bold text-lg">RW Helping Hands</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Continuing a beautiful legacy of compassion and kindness. 
              Every act of service honors her memory and touches lives with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Emergency Relief</li>
              <li>Education Support</li>
              <li>Healthcare Access</li>
              <li>Family Rehabilitation</li>
              <li>Community Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  RW Helping Hands Office<br />
                  Gulshan-e-Iqbal, Karachi<br />
                  Sindh - 75300, Pakistan
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+92-300-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@rwhelpinghands.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} RW Helping Hands. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
              <Heart className="w-4 h-4 text-secondary" />
              <span>Made with love in memory of a beautiful soul</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;