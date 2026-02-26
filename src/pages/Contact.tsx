import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { trackCallConversion } from "@/lib/gtag";

const Contact = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Contact", url: "https://www.gr8glazerefinishing.com/contact" }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Us | Gr8 Glaze Refinishing | Free Consultation & Quote"
        description="Contact Gr8 Glaze Refinishing for a free consultation. Call us or fill out our contact form. Expert bathtub and tile refinishing services in the LA area."
        keywords="contact Gr8 Glaze Refinishing, free quote LA, refinishing consultation, bathtub refinishing quote, tile refinishing estimate, Los Angeles refinishing contact"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow">
        <ContactForm />
        
        {/* Contact Information Tiles */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Phone */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Phone</h3>
                    <a 
                      href="tel:3238551752"
                      onClick={(e) => {
                        e.preventDefault();
                        trackCallConversion("tel:3238551752");
                      }}
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      (323) 855-1752
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Email</h3>
                    <a href="mailto:gr8glaze@gmail.com" className="text-foreground hover:text-accent transition-colors font-medium text-sm break-all">
                      gr8glaze@gmail.com
                    </a>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Location</h3>
                    <div className="text-foreground text-sm font-medium">
                      <div>San Fernando Valley</div>
                      <div>Los Angeles, CA</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

