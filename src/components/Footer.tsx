import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity group">
              <img 
                src="/gr8glazelogo.png" 
                alt="Gr8 Glaze Refinishing Logo" 
                className="h-16 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-background/80 text-base leading-relaxed max-w-md">
              Professional bathtub and tile refinishing services in the LA area. Restore surfaces to look new with specialized coatings. Quality warranties available.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="tel:3238551752" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-xl text-background/90 hover:text-accent transition-all duration-300 group"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a 
                href="mailto:gr8glaze@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-xl text-background/90 hover:text-accent transition-all duration-300 group"
              >
                <Mail className="w-4 h-4" />
                <span className="font-semibold">Email Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/marietta" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>Service Areas</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-background/70 hover:text-accent transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-background">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-background/60 mb-1">Phone</p>
                  <a 
                    href="tel:3238551752" 
                    className="text-base font-semibold text-background/90 hover:text-accent transition-colors"
                  >
                    (323) 855-1752
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-background/60 mb-1">Email</p>
                  <a 
                    href="mailto:gr8glaze@gmail.com" 
                    className="text-base font-semibold text-background/90 hover:text-accent transition-colors break-all"
                  >
                    gr8glaze@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-background/60 mb-1">Location</p>
                  <p className="text-base font-semibold text-background/90">
                    San Fernando Valley<br />
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {currentYear} Gr8 Glaze Refinishing. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Serving Los Angeles & San Fernando Valley
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
