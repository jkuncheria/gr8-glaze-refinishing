import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Timer, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const stats = [
  { icon: Clock, label: "years of experience", value: "10+" },
  { icon: DollarSign, label: "savings vs full replacement", value: "70%" },
  { icon: Award, label: "completed projects", value: "200+" },
  { icon: Timer, label: "project work hours", value: "1000+" },
];

const About = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "About Us", url: "https://www.gr8glazerefinishing.com/about" }
  ]);

  const structuredData = [breadcrumbSchema, getOrganizationSchema()];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Gr8 Glaze Refinishing | LA's Premier Bathtub & Tile Refinishing Specialists"
        description="Learn about Gr8 Glaze Refinishing - LA area's trusted bathtub and tile refinishing experts. Professional reglazing services for residential and commercial properties. Quality warranties available."
        keywords="Gr8 Glaze Refinishing, LA refinishing company, bathtub refinishing experts, tile refinishing professionals, San Fernando Valley refinishing, bathtub reglazing Los Angeles"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About Gr8 Glaze Refinishing | LA's Premier Bathtub & Tile Refinishing Specialists
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Us Section */}
              <div className="mb-16">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    ABOUT US
                  </h2>
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      <span className="font-semibold text-foreground">Gr8 Glaze Refinishing</span> is a professional refinishing company based in the San Fernando Valley, CA, specializing in bathtub and tile refinishing (reglazing) for both residential and commercial properties. We restore surfaces to look new using specialized coatings, highlighting quality, warranties, and cost-effectiveness compared to replacement.
                    </p>
                    <p>
                      We focus on saving money and extending fixture life by repairing chips, changing colors, and updating dated surfaces. Our techniques chemically bond new finishes to old ones for durability, creating a strong bond that lasts for years.
                    </p>
                    <p>
                      Our services include bathtub refinishing (restoring old, chipped, faded, or dated tubs including cast iron, fiberglass, and acrylic), tile resurfacing (renewing tile surfaces in bathrooms and kitchens), color changes (transforming the color of tubs and tiles), and commercial services for properties needing a fresh look.
                    </p>
                    <p>
                      <strong>Key Benefits:</strong> Cost-effective (cheaper than full replacement), durable (professional application creates a strong bond with warranties available), environmentally friendly (extends the life of existing fixtures, reducing waste), and fast (transforms surfaces in hours, not weeks, with minimal disruption).
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-accent mx-auto mb-3" />
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Follow Our Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See our latest refinishing projects and transformations on Instagram
                </p>
              </div>
              {/* Elfsight Instagram Feed Widget */}
              <div className="max-w-7xl mx-auto">
                <div 
                  className="elfsight-app-44fc5068-1ce8-4442-bdb1-bd074ec48eb4" 
                  data-elfsight-app-lazy
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;

