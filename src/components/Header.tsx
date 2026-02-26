import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { trackCallConversion } from "@/lib/gtag";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refs = Object.values(dropdownRefs.current) as (HTMLDivElement | null)[];
      const clickedOutside = refs.every(
        (ref: HTMLDivElement | null) => {
          if (!ref) return true;
          return !ref.contains(event.target as Node);
        }
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Navigation items
  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/about',
      subItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Service Areas', href: '/marietta' },
      ]
    },
    { 
      label: 'Services', 
      href: '/services',
      subItems: [
        { label: 'All Services', href: '/services' },
        { label: 'Cabinet Refinishing', href: '/cabinet-refinishing' },
      ]
    },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full flex flex-col z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <div className="text-center text-foreground font-semibold">
          <span className="mr-2">FREE ESTIMATES AVAILABLE!</span>
          <Link to="/contact" onClick={scrollToTop} className="text-accent underline hover:text-accent/80">Get Quote</Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-background py-6 md:py-2 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 relative">
          
          {/* Mobile Header Row */}
          <div className="w-full md:hidden flex items-center justify-between">
            <div className="flex items-center gap-2 w-20">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="p-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <a 
                href="tel:3238551752"
                onClick={(e) => {
                  e.preventDefault();
                  trackCallConversion("tel:3238551752");
                }}
                className="p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <Link to="/" onClick={scrollToTop} className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/newlogo.PNG" 
                alt="Gr8 Glaze Refinishing Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <button 
              className="p-2 text-foreground/70 w-20 flex justify-end"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo - Centered (Desktop) */}
          <div className="hidden md:flex md:relative md:left-0 md:transform-none md:col-start-2 md:col-end-3 md:justify-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center justify-center group">
              <img 
                src="/newlogo.PNG" 
                alt="Gr8 Glaze Refinishing Logo" 
                className="h-28 lg:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 md:col-start-3 md:col-end-4 md:justify-end">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center bg-accent hover:bg-accent/90 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              GET FREE QUOTE
            </Link>
            <a 
              href="tel:3238551752"
              onClick={(e) => {
                e.preventDefault();
                trackCallConversion("tel:3238551752");
              }}
              className="flex items-center border-2 border-accent text-accent hover:bg-accent/5 font-bold text-sm px-6 py-3 rounded-lg transition-all bg-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              (323) 855-1752
            </a>
          </div>

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-foreground text-background ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-bold py-4 md:py-0">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b border-foreground/20 md:border-none last:border-none relative"
              >
                {item.subItems && item.subItems.length > 0 ? (
                  // Dropdown menu
                  <div 
                    className="relative"
                    ref={(el) => {
                      if (el) {
                        dropdownRefs.current[item.label] = el;
                      }
                    }}
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full md:w-auto flex items-center justify-between py-3 md:py-4 transition-colors ${
                        location.pathname === item.href || item.subItems.some(sub => location.pathname === sub.href)
                          ? 'text-accent'
                          : 'hover:text-accent'
                      }`}
                    >
                      <span>{item.label.toUpperCase()}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="md:absolute md:top-full md:left-0 md:mt-0 bg-foreground/95 md:shadow-lg md:min-w-[200px] md:rounded-b-lg overflow-hidden z-50">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label} className="border-b border-foreground/20 last:border-none">
                            <Link
                              to={subItem.href}
                              className={`block py-3 px-4 md:px-6 transition-colors ${
                                location.pathname === subItem.href
                                  ? 'text-accent bg-foreground/80'
                                  : 'hover:bg-foreground/80 hover:text-accent'
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                                scrollToTop();
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`block py-3 md:py-4 transition-colors ${
                      location.pathname === item.href
                        ? 'text-accent'
                        : 'hover:text-accent'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
