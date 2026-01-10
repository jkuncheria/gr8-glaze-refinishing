import { useEffect } from "react";
import { Star, Sparkles } from "lucide-react";

const Reviews = () => {
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

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,167,98,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
            <Star className="w-8 h-8 text-accent fill-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it — hear from homeowners who have transformed their spaces with Gr8 Glaze Refinishing
          </p>
        </div>

        {/* Elfsight All-in-One Reviews Widget */}
        <div className="max-w-7xl mx-auto">
          <div 
            className="elfsight-app-d3589b00-b476-4be8-8a0b-d79832559b6d" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
