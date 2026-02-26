import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle2, Star, Sparkles } from "lucide-react";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { trackCallConversion } from "@/lib/gtag";

const Marietta = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Service Areas", url: "https://www.gr8glazerefinishing.com/marietta" }
  ]);

  const services = [
    "Bathtub Refinishing",
    "Tile Resurfacing",
    "Color Changes",
    "Commercial Refinishing",
  ];

  const benefits = [
    "Local LA area experts with years of experience",
    "Fast service available",
    "Free consultations and estimates",
    "Quality warranties on all work",
    "Licensed and insured professionals",
    "Competitive pricing",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Service Areas | Los Angeles & San Fernando Valley | Gr8 Glaze Refinishing"
        description="Gr8 Glaze Refinishing serves Los Angeles, San Fernando Valley, and surrounding LA areas. Expert bathtub and tile refinishing services. Call for service area information."
        keywords="LA refinishing, Los Angeles refinishing services, San Fernando Valley refinishing, LA bathtub refinishing, service areas, refinishing near me"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(202,167,98,0.08),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Gr8 Glaze Refinishing in Los Angeles, CA
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Your trusted local experts for bathtub and tile refinishing in Los Angeles, San Fernando Valley, and surrounding areas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={scrollToContact} 
                  className="bg-accent hover:bg-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-10 py-7 rounded-xl font-semibold text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="border-2 border-accent/30 hover:border-accent hover:bg-accent/5 px-10 py-7 rounded-xl font-semibold text-lg"
                >
                  <a 
                    href="tel:3238551752"
                    onClick={(e) => {
                      e.preventDefault();
                      trackCallConversion("tel:3238551752");
                    }}
                  >(323) 855-1752</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Service Area */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,167,98,0.06),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-border/50 shadow-xl mb-12 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Serving Los Angeles Area Homeowners</h2>
                  </div>
                  <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Gr8 Glaze Refinishing is proud to serve homeowners throughout <span className="font-semibold text-foreground">Los Angeles, California</span> and 
                      the surrounding San Fernando Valley area. We understand the unique needs of LA area residents and are committed to providing 
                      exceptional bathtub and tile refinishing services that transform your space without the cost and hassle of full replacements.
                    </p>
                    <p>
                      Whether you're in San Fernando Valley, Burbank, Glendale, Pasadena, Van Nuys, Northridge, Encino, or anywhere in the LA area, our experienced team is ready 
                      to help you restore your bathtub and tile surfaces. We've been serving LA area families for years, building a 
                      reputation for quality workmanship, excellent customer service, and affordable solutions.
                    </p>
                    <p>
                      Our service area includes Los Angeles and surrounding areas, and we're always happy to check if we can serve your specific 
                      location. Don't hesitate to reach out for a free consultation!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold">Our LA Area Services</h3>
                    </div>
                    <ul className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                          <span className="text-base">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-accent fill-accent" />
                      </div>
                      <h3 className="text-2xl font-bold">Why Choose Us in LA</h3>
                    </div>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                          <span className="text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Service Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-background">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">LA Area</h4>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles & Surrounding Areas
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-background">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Same-day service available
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-background">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Call Today</h4>
                    <a 
                      href="tel:3238551752"
                      onClick={(e) => {
                        e.preventDefault();
                        trackCallConversion("tel:3238551752");
                      }}
                      className="text-sm text-accent hover:text-accent/80 font-semibold transition-colors"
                    >
                      (323) 855-1752
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Component */}
        <ServiceArea />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Marietta;

