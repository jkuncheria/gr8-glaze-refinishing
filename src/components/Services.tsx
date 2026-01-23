import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bath, UtensilsCrossed, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background scroll-mt-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(202,167,98,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Professional bathtub and tile refinishing services designed to restore surfaces to look brand new
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {homePageServices.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-2 border-border/50 hover:border-accent/50 flex flex-col bg-background hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden flex-shrink-0 bg-muted/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="w-16 h-16 rounded-2xl bg-background/95 backdrop-blur-sm shadow-lg border-2 border-accent/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-accent rounded-full"></div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* See All Services Button */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="group bg-accent hover:bg-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-10 py-7 rounded-xl font-semibold text-lg"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
