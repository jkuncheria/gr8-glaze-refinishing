import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle2, Sparkles } from "lucide-react";

const BookConsultation = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Free estimates and consultations",
    "No obligation to proceed",
    "Expert advice on your project",
    "Transparent pricing",
    "Flexible scheduling",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="bg-background p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                      Book A Free Consultation
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Are you looking to revitalize the appearance of your home? Whether you want a fresh coat of paint, 
                    some stylish upgrades, or repairs in a specific room, we've got you covered. Call us now for expert assistance.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      onClick={scrollToContact}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Consultation
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a href="tel:3239477439">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Sparkles className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Ready to Transform Your Home?</h3>
                    <p className="text-muted-foreground">
                      Get started with a free consultation today
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;

