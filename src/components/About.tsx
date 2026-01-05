import { Button } from "@/components/ui/button";
import { Award, Clock, DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Clock, label: "years of experience", value: "10+" },
  { icon: DollarSign, label: "savings vs full replacement", value: "70%" },
  { icon: Award, label: "completed projects", value: "200+" },
  { icon: Timer, label: "project work hours", value: "1000+" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to <span className="font-semibold text-foreground">Gr8 Glaze Refinishing</span>, 
                a professional refinishing company based in the San Fernando Valley, CA, specializing in bathtub and tile refinishing (reglazing) 
                for both residential and commercial properties. We restore surfaces to look new using specialized coatings, 
                highlighting quality, warranties, and cost-effectiveness compared to replacement.
              </p>
              <p>
                Our mission is to help you save money and extend the life of your fixtures by repairing chips, changing colors, 
                and updating dated surfaces. We use advanced techniques to chemically bond new finishes to old ones for maximum durability, 
                creating a strong bond that lasts for years.
              </p>
              <p>
                We focus on providing cost-effective solutions that are cheaper than full replacement, environmentally friendly by extending 
                the life of existing fixtures, and fast—transforming surfaces in hours, not weeks, with minimal disruption to your daily life.
              </p>
            </div>
            <Button 
              className="mt-6 bg-primary hover:bg-primary/90" 
              size="lg"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
