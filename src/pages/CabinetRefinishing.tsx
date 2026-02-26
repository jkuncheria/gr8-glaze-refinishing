import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Clock, DollarSign, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/structuredData";
import { trackCallConversion } from "@/lib/gtag";

const CabinetRefinishing = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Services", url: "https://www.gr8glazerefinishing.com/services" },
    { name: "Cabinet Refinishing", url: "https://www.gr8glazerefinishing.com/cabinet-refinishing" }
  ]);

  const serviceSchema = getServiceSchema(
    "Cabinet Refinishing Los Angeles",
    "Professional cabinet refinishing services in Los Angeles. Transform your kitchen and bathroom cabinets with expert reglazing. Save up to 70% compared to cabinet replacement.",
    "Call for Free Quote"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does cabinet refinishing cost in Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cabinet refinishing typically costs 50-70% less than full cabinet replacement. While new cabinets can cost $10,000-$30,000 or more, refinishing usually ranges from $2,000-$5,000 depending on the size of your kitchen and the finish you choose."
        }
      },
      {
        "@type": "Question",
        "name": "How long does cabinet refinishing take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most cabinet refinishing projects are completed in 2-5 days depending on the size of your kitchen. This is much faster than a full cabinet replacement, which can take weeks or even months."
        }
      },
      {
        "@type": "Question",
        "name": "What types of cabinets can be refinished?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can refinish most cabinet types including wood, laminate, and thermofoil cabinets. Our professional coatings adhere to virtually any surface and provide a durable, long-lasting finish."
        }
      },
      {
        "@type": "Question",
        "name": "How long does cabinet refinishing last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper care, professionally refinished cabinets can last 10-15 years or more. We use high-quality, durable coatings designed to withstand daily use in kitchens and bathrooms."
        }
      }
    ]
  };

  const structuredData = [breadcrumbSchema, serviceSchema, faqSchema];

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "Cabinet refinishing costs a fraction of full replacement. Keep your existing cabinet boxes and transform them with a fresh, modern finish."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most projects completed in 2-5 days. No weeks of construction, dust, or living without a functional kitchen."
    },
    {
      icon: Sparkles,
      title: "Like-New Results",
      description: "Professional-grade finishes that look stunning and last for years. Choose from a wide range of colors and finishes."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We stand behind our work with professional craftsmanship and durable materials designed for daily use."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We assess your cabinets, discuss your vision, and provide a detailed quote with no obligation."
    },
    {
      step: "2",
      title: "Surface Preparation",
      description: "We thoroughly clean, sand, and prime your cabinets to ensure optimal adhesion and a flawless finish."
    },
    {
      step: "3",
      title: "Professional Application",
      description: "Multiple coats of high-quality finish are applied using professional techniques for a smooth, durable result."
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "We inspect every detail to ensure your cabinets meet our high standards before completing the project."
    }
  ];

  const faqs = [
    {
      question: "How much does cabinet refinishing cost in Los Angeles?",
      answer: "Cabinet refinishing typically costs 50-70% less than full cabinet replacement. While new cabinets can cost $10,000-$30,000 or more, refinishing usually ranges from $2,000-$5,000 depending on the size of your kitchen and the finish you choose. Contact us for a free, personalized quote."
    },
    {
      question: "How long does cabinet refinishing take?",
      answer: "Most cabinet refinishing projects are completed in 2-5 days depending on the size of your kitchen. This is much faster than a full cabinet replacement, which can take weeks or even months. You'll have minimal disruption to your daily routine."
    },
    {
      question: "What types of cabinets can be refinished?",
      answer: "We can refinish most cabinet types including solid wood, laminate, thermofoil, and MDF cabinets. Our professional coatings adhere to virtually any surface and provide a durable, long-lasting finish. We'll assess your cabinets during the free consultation."
    },
    {
      question: "How long does cabinet refinishing last?",
      answer: "With proper care, professionally refinished cabinets can last 10-15 years or more. We use high-quality, durable coatings designed to withstand daily use in kitchens and bathrooms. Following our care guidelines will help maximize the lifespan of your refinished cabinets."
    },
    {
      question: "Can I change the color of my cabinets?",
      answer: "Absolutely! One of the biggest advantages of cabinet refinishing is the ability to completely change the color and style of your cabinets. Transform dark, dated cabinets to bright white, or update honey oak to a modern gray. The possibilities are endless."
    },
    {
      question: "Is cabinet refinishing better than painting?",
      answer: "Professional cabinet refinishing uses specialized coatings and techniques that are far more durable than standard paint. Our finishes are designed to resist chipping, peeling, and wear from daily kitchen use, providing a factory-like finish that lasts for years."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cabinet Refinishing Los Angeles | Kitchen Cabinet Reglazing | Gr8 Glaze Refinishing"
        description="Professional cabinet refinishing in Los Angeles. Transform your kitchen cabinets for a fraction of replacement cost. Expert reglazing, color changes, and modern finishes. Free quotes available."
        keywords="cabinet refinishing Los Angeles, kitchen cabinet refinishing LA, cabinet reglazing, cabinet painting Los Angeles, kitchen cabinet makeover, cabinet resurfacing LA, bathroom cabinet refinishing"
        structuredData={structuredData}
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-muted/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,167,98,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Professional Cabinet Refinishing
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Cabinet Refinishing in <span className="text-accent">Los Angeles</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your kitchen and bathroom cabinets without the cost and hassle of replacement. 
                  Our professional refinishing services give your cabinets a stunning, like-new appearance 
                  at a fraction of the price.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg"
                  >
                    <Link to="/contact">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent/5 font-bold px-8 py-6 text-lg"
                  >
                    <a 
                      href="tel:3238551752"
                      onClick={(e) => {
                        e.preventDefault();
                        trackCallConversion("tel:3238551752");
                      }}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      (323) 855-1752
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-3xl blur-xl" />
                <img 
                  src="/cabinets/IMG_2433.jpeg" 
                  alt="Cabinet refinishing before and after in Los Angeles"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Choose Cabinet Refinishing?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cabinet refinishing is the smart, cost-effective way to update your kitchen or bathroom 
                without the expense and disruption of full replacement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Refinish Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Cabinet Types We Refinish
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our professional refinishing services work on virtually any cabinet type. 
                  We use specialized coatings and techniques to ensure a beautiful, durable finish.
                </p>
                <ul className="space-y-4">
                  {[
                    "Kitchen cabinets (upper and lower)",
                    "Bathroom vanity cabinets",
                    "Solid wood cabinets",
                    "Laminate and thermofoil cabinets",
                    "MDF and particle board cabinets",
                    "Painted and stained cabinets",
                    "Oak, maple, cherry, and other wood species",
                    "Cabinet doors, drawers, and frames"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/cabinets/IMG_2303.jpg" 
                  alt="Kitchen cabinet refinishing Los Angeles"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_2827.jpeg" 
                  alt="Bathroom vanity cabinet refinishing"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_2364.jpg" 
                  alt="Cabinet color change refinishing"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_2379.jpg" 
                  alt="Modern cabinet refinishing finish"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Cabinet Refinishing Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a proven process to ensure exceptional results every time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-16 w-full h-0.5 bg-accent/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about cabinet refinishing in Los Angeles.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 border-accent/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Cabinet Refinishing Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our portfolio of cabinet refinishing projects in Los Angeles. See the transformations we've achieved for homeowners just like you.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/cabinets/IMG_1234.jpg", alt: "Kitchen cabinet refinishing project" },
                { src: "/cabinets/IMG_1244.jpg", alt: "Cabinet door refinishing" },
                { src: "/cabinets/IMG_2303.jpg", alt: "White cabinet refinishing" },
                { src: "/cabinets/IMG_2364.jpg", alt: "Modern cabinet finish" },
                { src: "/cabinets/IMG_2379.jpg", alt: "Cabinet color transformation" },
                { src: "/cabinets/IMG_2426.jpg", alt: "Professional cabinet reglazing" },
                { src: "/cabinets/IMG_2433.jpeg", alt: "Kitchen cabinet makeover" },
                { src: "/cabinets/IMG_2688.jpg", alt: "Cabinet refinishing results" },
                { src: "/cabinets/IMG_2827.jpeg", alt: "Bathroom vanity refinishing" },
                { src: "/cabinets/IMG_3246.jpg", alt: "Cabinet restoration project" },
                { src: "/cabinets/IMG_20210616_230351_986.JPG", alt: "Before and after cabinet refinishing" },
                { src: "/cabinets/Resized_Resized_20210617_181633(1).JPG", alt: "Cabinet refinishing detail" },
              ].map((image, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Cabinets?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your cabinet refinishing project. 
              Our team is ready to help you achieve the kitchen or bathroom of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-foreground font-bold px-8 py-6 text-lg"
              >
                <a 
                  href="tel:3238551752"
                  onClick={(e) => {
                    e.preventDefault();
                    trackCallConversion("tel:3238551752");
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (323) 855-1752
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CabinetRefinishing;
