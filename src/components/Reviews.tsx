import { useEffect } from "react";

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
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from homeowners who have transformed their spaces with Gr8 Glaze Refinishing
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
