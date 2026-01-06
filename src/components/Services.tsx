import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bath, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const homePageServices = [
  {
    icon: Bath,
    title: "Bathtub Refinishing",
    description: "Restore old, chipped, faded, or dated tubs (cast iron, fiberglass, acrylic) to a new, flawless finish. Professional reglazing that saves thousands compared to replacement.",
    image: "/bathtub-refinishing.png",
    price: "Call for Free Quote",
  },
  {
    icon: Home,
    title: "Tile Resurfacing",
    description: "Renew tile surfaces in bathrooms and kitchens with professional refinishing. Transform dated tiles to look brand new with specialized coatings.",
    image: "/full-gallery/a5.1.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: UtensilsCrossed,
    title: "Color Changes",
    description: "Transform the color of tubs and tiles (e.g., from powder blue to white). Update your space without the cost and disruption of replacement.",
    image: "/color-changes.png",
    price: "Call for Free Quote",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-secondary/30 scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Professional bathtub and tile refinishing services designed to restore surfaces to look new
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {homePageServices.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-grow">{service.description}</p>
                  {service.price && (
                    <div className="mt-auto pt-4">
                      {service.price === "Call for Free Quote" ? (
                        <a href="tel:3238551752" className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20 hover:bg-secondary/70 transition-colors cursor-pointer">
                          <span className="text-base md:text-lg font-semibold text-foreground">{service.price}</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20">
                          <span className="text-base md:text-lg font-semibold text-foreground">{service.price}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* See All Services Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background">
            <Link to="/services">
              See All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
