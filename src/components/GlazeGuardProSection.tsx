import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const GlazeGuardProSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              GlazeGuard Pro™ by Gr8 Glaze Refinishing
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-accent">
              Zero Odor. Zero Shutdown. Total Protection.
            </p>
            <p className="text-lg text-muted-foreground">
              VOC-free, odorless polymer coating engineered for commercial facilities that require safe, fast, and durable refinishing.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start animate-fade-in-up">
              <img 
                src="/glazeguard/glazeguard5.JPG" 
                alt="Trusted by Facilities That Can't Afford Odors - Hospitals, Nursing Homes, Schools, Hotels, Assisted Living" 
                className="max-w-full md:max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-background" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Perfect for Facilities That Can't Have Smells</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    GlazeGuard Pro™ is specifically engineered for commercial facilities where traditional refinishing coatings are impossible due to their strong odors and harmful fumes.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Hospitals</strong> — No disruption to patient care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Nursing Homes</strong> — Safe for residents with respiratory issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Schools</strong> — Safe for students and staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Hotels</strong> — Refinish without closing rooms</span>
                    </li>
                  </ul>
                  <div className="bg-background/50 rounded-lg p-4 border-l-4 border-accent mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Why This Matters:</strong> Traditional refinishing coatings require evacuating rooms and shutting down operations. GlazeGuard Pro™ eliminates all of this — refinish while facilities remain fully operational.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button 
              size="lg" 
              asChild 
              className="bg-accent hover:bg-accent/90 text-background text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/glazeguard-pro">
                Learn More About GlazeGuard Pro™
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlazeGuardProSection;

