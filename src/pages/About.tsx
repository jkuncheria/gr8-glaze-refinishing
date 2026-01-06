import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Timer, Phone } from "lucide-react";
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About Gr8 Glaze Refinishing | LA's Premier Bathtub & Tile Refinishing Specialists
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Us Section */}
              <div className="mb-16">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    ABOUT US
                  </h2>
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
                    <p>
                      That decision is how <span className="font-semibold text-foreground">Gr8 Glaze Refinishing</span> was born.
                    </p>
                    <p>
                      I started this company with one simple belief: <span className="font-semibold text-foreground">quality should never be rushed</span>. Every project deserves proper preparation, professional application, and attention to detail. I treat every home as if it were my own, because my name and reputation stand behind every job.
                    </p>
                    <p>
                      I'm still learning and growing every day, and I take pride in improving with each project. This journey has been built on hard work, honesty, and passion for the trade — and I'm grateful for every customer who allows me to do what I love.
                    </p>
                    <p className="text-xl font-semibold text-foreground italic">
                      Another day. Another spray. Another job done right.
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-accent mx-auto mb-3" />
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
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Follow Our Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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

