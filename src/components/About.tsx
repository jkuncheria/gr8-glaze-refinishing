import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,167,98,0.06),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-in flex justify-center lg:justify-start">
            <div className="relative group max-w-[90%] lg:max-w-[85%]">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                <img
                  src="/bathtub-refinishing.png"
                  alt="Bathtub Refinishing Before and After"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up space-y-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                About Us
              </h2>
            </div>
            
            <div className="relative pl-6 border-l-4 border-accent/30">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My name is <span className="font-semibold text-foreground">Noe Pineda</span>, founder of <span className="font-semibold text-foreground">Gr8 Glaze Refinishing, Inc.</span>
                </p>
                <p>
                  For years, I worked in the refinishing industry giving everything I had to my craft. I delivered quality work, paid attention to details, and took pride in every surface I refinished. But growth opportunities were never offered. Speed and sloppy work were preferred over doing the job right — and that never sat well with me.
                </p>
                <p>
                  After many years of learning the ropes, perfecting my skills, and understanding what truly makes a refinishing job last, I reached a turning point. I made one of the hardest decisions of my life — I quit my job and took a leap of faith.
                </p>
                <p className="text-foreground font-medium">
                  That decision is how <span className="font-semibold text-accent">Gr8 Glaze Refinishing</span> was born.
                </p>
                <p>
                  I started this company with one simple belief: <span className="font-semibold text-accent">quality should never be rushed</span>. Every project deserves proper preparation, professional application, and attention to detail. I treat every home as if it were my own, because my name and reputation stand behind every job.
                </p>
              </div>
            </div>
            
            <Button 
              className="group mt-8 bg-accent hover:bg-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-6 rounded-xl font-semibold text-lg" 
              size="lg"
              asChild
            >
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
