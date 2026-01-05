import { Shield, Award, ThumbsUp, Users, Clock, BadgeCheck } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete protection for your peace of mind"
    },
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Trusted by thousands of homeowners"
    },
    {
      icon: ThumbsUp,
      title: "5-Year Warranty",
      description: "Industry-leading guarantee on all work"
    },
    {
      icon: Users,
      title: "10,000+ Happy Customers",
      description: "Proven track record of excellence"
    },
    {
      icon: Clock,
      title: "Same-Day Service Available",
      description: "Fast turnaround when you need it"
    },
    {
      icon: BadgeCheck,
      title: "EPA Certified",
      description: "Eco-friendly & safe refinishing"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Why Thousands Trust Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your home deserves the best. We're committed to excellence, safety, and your complete satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{indicator.title}</h3>
                    <p className="text-sm text-muted-foreground">{indicator.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-card border border-border rounded-xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">A+</span>
              <span className="text-sm text-muted-foreground">BBB Rating</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">4.9★</span>
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
