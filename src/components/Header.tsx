import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when route changes to a different page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id: string, delay: number = 100) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 140; // Updated for two-row header layout
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, delay);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      scrollToElement(id, 300);
    } else {
      scrollToElement(id, 100);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      scrollToElement(id, 100);
    } else {
      navigate("/");
      scrollToElement(id, 300);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`relative z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-accent/10' 
        : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-4 lg:px-6">
        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-20">
          {/* Mobile: Call Button */}
          <Button 
            asChild 
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300 font-semibold px-4"
          >
            <a href="tel:3238551752">
              <Phone className="w-4 h-4 mr-1.5" />
              <span className="text-xs">Call</span>
            </a>
          </Button>

          {/* Mobile: Centered Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick} 
            className="flex items-center group absolute left-1/2 -translate-x-1/2"
          >
            <div className="relative">
              <img 
                src="/gr8glazelogo.png" 
                alt="Gr8 Glaze Refinishing Logo" 
                className="h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-lg hover:bg-accent/10 transition-colors relative z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Logo Row - Centered */}
          <div className="flex justify-center items-center py-4">
            <Link 
              to="/" 
              onClick={handleLogoClick} 
              className="flex items-center group"
            >
              <div className="relative">
                <img 
                  src="/gr8glazelogo.png" 
                  alt="Gr8 Glaze Refinishing Logo" 
                  className="h-16 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-accent/5 transition-all duration-300 rounded-lg blur-sm"></div>
              </div>
            </Link>
          </div>

          {/* Navigation Row */}
          <div className="relative flex items-center justify-center pb-4">
            {/* Desktop Navigation - Centered */}
            <div className="flex items-center gap-6">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`relative px-5 py-3 text-base font-medium transition-all duration-200 ${
                location.pathname === "/" 
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <span className="relative z-10">Home</span>
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              )}
              <span className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md"></span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`px-5 py-3 text-base font-medium transition-all duration-200 flex items-center gap-2 outline-none ${
                location.pathname.startsWith("/about") || location.pathname === "/marietta"
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}>
                <span>About</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                <span className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 mt-2 border-accent/10 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer py-2.5">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/marietta" className="cursor-pointer py-2.5">
                    Service Areas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/services" 
              className={`relative px-5 py-3 text-base font-medium transition-all duration-200 ${
                location.pathname === "/services" 
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <span className="relative z-10">Services</span>
              {location.pathname === "/services" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              )}
              <span className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md"></span>
            </Link>
            
            <Link 
              to="/gallery" 
              className={`relative px-5 py-3 text-base font-medium transition-all duration-200 ${
                location.pathname === "/gallery" 
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <span className="relative z-10">Gallery</span>
              {location.pathname === "/gallery" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              )}
              <span className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`relative px-5 py-3 text-base font-medium transition-all duration-200 ${
                location.pathname === "/contact" 
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              <span className="relative z-10">Contact</span>
              {location.pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              )}
              <span className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-md"></span>
            </Link>
            </div>

            {/* Desktop CTA Button - Positioned absolutely on the right */}
            <div className="absolute right-0 flex items-center">
              <Button 
                asChild 
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6"
              >
                <a href="tel:3238551752">
                  <Phone className="w-4 h-4 mr-2" />
                  (323) 855-1752
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-1 border-t border-accent/10 mt-2">
            <Link 
              to="/" 
              onClick={(e) => {
                setIsMenuOpen(false);
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                location.pathname === "/"
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
              }`}
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  location.pathname.startsWith("/about") || location.pathname === "/marietta"
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isAboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-6 pr-4 py-2 space-y-1">
                  <Link 
                    to="/about" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${
                      location.pathname === "/about"
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/60 hover:text-foreground hover:bg-accent/5'
                    }`}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/marietta" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${
                      location.pathname === "/marietta"
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/60 hover:text-foreground hover:bg-accent/5'
                    }`}
                  >
                    Service Areas
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                location.pathname === "/services"
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
              }`}
            >
              Services
            </Link>
            
            <Link 
              to="/gallery" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                location.pathname === "/gallery"
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
              }`}
            >
              Gallery
            </Link>
            
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                location.pathname === "/contact"
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
              }`}
            >
              Contact
            </Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
