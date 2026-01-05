import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle2, Star } from "lucide-react";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Gr8 Glaze Refinishing in Los Angeles, CA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted local experts for bathtub and tile refinishing in Los Angeles, San Fernando Valley, and surrounding areas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:3239477439">(323) 947-7439</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Marietta Service */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl mb-12">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">Serving Los Angeles Area Homeowners</h2>
                  <div className="space-y-4 text-muted-foreground">
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
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Our LA Area Services</h3>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us in LA</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Service Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">LA Area</h4>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles & Surrounding Areas
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Same-day service available
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Call Today</h4>
                    <p className="text-sm text-muted-foreground">
                      (323) 947-7439
                    </p>
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

