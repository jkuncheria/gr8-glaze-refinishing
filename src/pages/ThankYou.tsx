import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { trackFormConversion, trackCallConversion } from "@/lib/gtag";

const ThankYou = () => {
  useEffect(() => {
    // Fire Google Ads form conversion event
    trackFormConversion();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Thank You | Gr8 Glaze Refinishing"
        description="Thank you for contacting Gr8 Glaze Refinishing. We will get back to you shortly."
        keywords="thank you, contact confirmation, Gr8 Glaze Refinishing"
      />
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,167,98,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full mb-8 shadow-lg animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              Thank You!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Your request has been submitted successfully. We appreciate you reaching out to Gr8 Glaze Refinishing!
            </p>
            
            <div className="bg-accent/10 border-2 border-accent/20 rounded-2xl p-8 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl font-bold mb-3">What Happens Next?</h2>
              <ul className="text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Our team will review your request within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>We'll contact you to discuss your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>You'll receive a free, no-obligation quote</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl font-semibold"
              >
                <Link to="/">
                  Back to Home
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-accent/50 hover:border-accent text-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl font-semibold"
              >
                <a 
                  href="tel:3238551752"
                  onClick={(e) => {
                    e.preventDefault();
                    trackCallConversion("tel:3238551752");
                  }}
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
