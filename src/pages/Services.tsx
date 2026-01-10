import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Home, Bath, UtensilsCrossed, Droplet, ShowerHead, Waves, Package, WashingMachine, SquareStack } from "lucide-react";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/structuredData";

const allServices = [
  // First 3 services (from homepage)
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
  // Additional 6 services
  {
    icon: Package,
    title: "Cabinet Refinishing",
    description: "Breathe new life into your cabinets with professional refinishing. Modern finishes at a fraction of the cost of full replacement.",
    image: "/full-gallery/a7.2.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: Waves,
    title: "Fiberglass Refinishing",
    description: "Expert refinishing for fiberglass tubs, showers, and surfaces. Restore durability and beauty with specialized coatings.",
    image: "/full-gallery/a6.2.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: ShowerHead,
    title: "Tub and Tile Refinishing",
    description: "Complete tub and tile refinishing for a cohesive, updated look. Transform your entire bathroom space with professional refinishing.",
    image: "/full-gallery/a4.1.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: WashingMachine,
    title: "Kitchen Sink Refinishing",
    description: "Restore your kitchen sink to like-new condition with professional refinishing. Durable finishes that resist stains and wear.",
    image: "/full-gallery/a1.2.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: SquareStack,
    title: "Vanity Refinishing",
    description: "Update your bathroom vanity with professional refinishing. Transform dated vanities to match your modern bathroom design.",
    image: "/full-gallery/a2.2.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: UtensilsCrossed,
    title: "Countertop Refinishing",
    description: "Restore beauty to your countertops with our refinishing expertise. Durable finishes that look stunning for years.",
    image: "/full-gallery/a1.4.jpeg",
    price: "Call for Free Quote",
  },
];

const Services = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Services", url: "https://www.gr8glazerefinishing.com/services" }
  ]);

  const serviceSchemas = allServices.map(service => 
    getServiceSchema(service.title, service.description, service.price || undefined)
  );

  const structuredData = [breadcrumbSchema, ...serviceSchemas];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Our Services | Bathtub & Tile Refinishing Services | Gr8 Glaze Refinishing"
        description="Professional bathtub and tile refinishing services in the LA area: bathtub refinishing, tile resurfacing, color changes, and commercial refinishing. Affordable alternative to replacement. Free quotes available."
        keywords="bathtub refinishing LA, tile resurfacing Los Angeles, bathtub reglazing, tile refinishing, bathroom refinishing, bathtub color change, commercial refinishing, San Fernando Valley"
        structuredData={structuredData}
      />
      <Header />
      <main className="flex-grow">
        <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(202,167,98,0.08),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Bathtub & Tile Refinishing Services in LA
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We provide professional bathtub and tile refinishing services designed to restore surfaces to look brand new
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {allServices.map((service, index) => (
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
                    <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    {service.price && (
                      <div className="mt-auto pt-6 border-t border-border/50">
                        {service.price === "Call for Free Quote" ? (
                          <a 
                            href="tel:3238551752" 
                            className="group/cta inline-flex items-center justify-center w-full gap-2 bg-accent/5 hover:bg-accent/10 rounded-xl px-6 py-4 border-2 border-accent/20 hover:border-accent transition-all duration-300 cursor-pointer"
                          >
                            <span className="text-base font-semibold text-accent group-hover/cta:text-accent transition-colors">
                              {service.price}
                            </span>
                          </a>
                        ) : (
                          <div className="inline-flex items-center justify-center w-full gap-2 bg-accent/5 rounded-xl px-6 py-4 border-2 border-accent/20">
                            <span className="text-base font-semibold text-foreground">{service.price}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

