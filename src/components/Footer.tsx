import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/gr8glazelogo.png" 
                  alt="Gr8 Glaze Refinishing Logo" 
                  className="h-12 object-contain"
                />
              </Link>
            </div>
            <p className="text-background/80 text-sm">
              Professional bathtub and tile refinishing services in the LA area. Restore surfaces to look new with specialized coatings. Quality warranties available.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:3238551752" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                (323) 855-1752
              </a>
              <a href="mailto:gr8glaze@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                gr8glaze@gmail.com
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>San Fernando Valley</div>
                  <div>Los Angeles, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80 mb-6">
              <li>
                <Link to="/" className="hover:text-background transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-background transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-background transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-background transition-colors">Gallery</Link>
              </li>
              {/* <li>
                <Link to="/warranty" className="hover:text-background transition-colors">Warranty</Link>
              </li>
              <li>
                <Link to="/care-tips" className="hover:text-background transition-colors">Care Tips</Link>
              </li> */}
              <li>
                <Link to="/marietta" className="hover:text-background transition-colors">Service Areas</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4">
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Gr8 Glaze Refinishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
