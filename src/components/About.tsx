import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                My name is <span className="font-semibold text-foreground">Noe Pineda</span>, founder of <span className="font-semibold text-foreground">Gr8 Glaze Refinishing, Inc.</span>
              </p>
              <p>
                For years, I worked in the refinishing industry giving everything I had to my craft. I delivered quality work, paid attention to details, and took pride in every surface I refinished. But growth opportunities were never offered. Speed and sloppy work were preferred over doing the job right — and that never sat well with me.
              </p>
              <p>
                After many years of learning the ropes, perfecting my skills, and understanding what truly makes a refinishing job last, I reached a turning point. I made one of the hardest decisions of my life — I quit my job and took a leap of faith.
              </p>
              <p>
                That decision is how <span className="font-semibold text-foreground">Gr8 Glaze Refinishing</span> was born.
              </p>
              <p>
                I started this company with one simple belief: <span className="font-semibold text-foreground">quality should never be rushed</span>. Every project deserves proper preparation, professional application, and attention to detail. I treat every home as if it were my own, because my name and reputation stand behind every job.
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

          <div className="animate-fade-in-up flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-[90%] lg:max-w-[85%]">
              <img
                src="/bathtub-refinishing.png"
                alt="Bathtub Refinishing Before and After"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
