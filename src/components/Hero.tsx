import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bathroom.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury bathroom with refinished surfaces"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/75 to-foreground/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(202,167,98,0.15),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-background">Los Angeles' Trusted Refinishing Experts</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] mb-6 animate-fade-in-up">
              Transform Your Space with Professional Refinishing
            </h1>
            
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Professional bathtub and tile refinishing services in Los Angeles. 
              Restore surfaces to look brand new with specialized coatings—a cost-effective alternative to replacement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl font-semibold"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-background/95 backdrop-blur-sm hover:bg-background text-foreground border-2 border-background/50 text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl font-semibold"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Get Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: CheckCircle2, text: "Free Consultations" },
              { icon: CheckCircle2, text: "Quality Warranties" },
              { icon: CheckCircle2, text: "Same-Day Service" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-background/20">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-background">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center backdrop-blur-sm bg-background/10">
          <div className="w-1.5 h-4 bg-background/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
