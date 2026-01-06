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
      <main className="flex-grow pt-20">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Bathtub & Tile Refinishing Services in LA</h1>
              <p className="text-lg text-muted-foreground">
                We provide professional bathtub and tile refinishing services designed to restore surfaces to look new
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-96 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    {service.price && (
                      <div className="mt-auto pt-4">
                        {service.priceNote && (
                          <div className="text-xs text-muted-foreground mb-2 ml-1">{service.priceNote}</div>
                        )}
                        {service.price === "Call for Free Quote" ? (
                          <a href="tel:3238551752" className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20 hover:bg-secondary/70 transition-colors cursor-pointer">
                            <span className="text-lg font-semibold text-foreground">{service.price}</span>
                          </a>
                        ) : (
                          <div className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20">
                            <span className="text-lg font-semibold text-foreground">{service.price}</span>
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

