import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Timer, Phone, Sparkles, Quote } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const stats = [
  { icon: Clock, label: "years of experience", value: "10+" },
  { icon: DollarSign, label: "savings vs full replacement", value: "70%" },
  { icon: Award, label: "completed projects", value: "200+" },
  { icon: Timer, label: "project work hours", value: "1000+" },
];

const About = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "About Us", url: "https://www.gr8glazerefinishing.com/about" }
  ]);

  const structuredData = [breadcrumbSchema, getOrganizationSchema()];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Gr8 Glaze Refinishing | LA's Premier Bathtub & Tile Refinishing Specialists"
        description="Learn about Gr8 Glaze Refinishing - LA area's trusted bathtub and tile refinishing experts. Professional reglazing services for residential and commercial properties. Quality warranties available."
        keywords="Gr8 Glaze Refinishing, LA refinishing company, bathtub refinishing experts, tile refinishing professionals, San Fernando Valley refinishing, bathtub reglazing Los Angeles"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-8 pb-20 md:pt-12 md:pb-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(202,167,98,0.08),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                About Gr8 Glaze Refinishing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                LA's Premier Bathtub & Tile Refinishing Specialists
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,167,98,0.06),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* About Us Section */}
              <div className="mb-16">
                <div className="mb-12">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                      Our Story
                    </h2>
                  </div>
                  
                  <div className="relative pl-6 border-l-4 border-accent/30">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
                      <p>
                        I'm still learning and growing every day, and I take pride in improving with each project. This journey has been built on hard work, honesty, and passion for the trade — and I'm grateful for every customer who allows me to do what I love.
                      </p>
                      <p className="text-xl font-semibold text-foreground italic pt-4">
                        Another day. Another spray. Another job done right.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10">
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-10 py-7 rounded-xl font-semibold text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Your Free Consultation
                  </Button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-2 border-border/50 hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-background">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-accent mx-auto mb-3 rounded-full" />
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,167,98,0.05),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                  Follow Our Work
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  See our latest refinishing projects and transformations on Instagram
                </p>
              </div>
              {/* Elfsight Instagram Feed Widget */}
              <div className="max-w-7xl mx-auto">
                <div 
                  className="elfsight-app-44fc5068-1ce8-4442-bdb1-bd074ec48eb4" 
                  data-elfsight-app-lazy
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;

