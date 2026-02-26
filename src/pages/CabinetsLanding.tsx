import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Send, Loader2, CheckCircle2, Sparkles, Shield, TrendingDown, Clock, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { submitContactFormToRenoLens } from "@/lib/renolensApi";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { trackCallConversion } from "@/lib/gtag";

// Reusable form component
interface CabinetQuoteFormProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    address: string;
    budget: string;
    cabinetType: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    email: string;
    address: string;
    budget: string;
    cabinetType: string;
    message: string;
  }>>;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
  compact?: boolean;
}

const CabinetQuoteForm = ({ 
  formData, 
  setFormData, 
  handleSubmit, 
  handleChange, 
  isSubmitting,
  compact = false 
}: CabinetQuoteFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-6"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`name-${compact ? 'compact' : 'full'}`} className="text-foreground font-medium text-sm">
            Full Name *
          </Label>
          <Input
            id={`name-${compact ? 'compact' : 'full'}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${compact ? "h-10" : "h-12"} border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all`}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`phone-${compact ? 'compact' : 'full'}`} className="text-foreground font-medium text-sm">
            Phone Number *
          </Label>
          <Input
            id={`phone-${compact ? 'compact' : 'full'}`}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`${compact ? "h-10" : "h-12"} border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all`}
            placeholder="(323) 555-1234"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`email-${compact ? 'compact' : 'full'}`} className="text-foreground font-medium text-sm">
          Email Address *
        </Label>
        <Input
          id={`email-${compact ? 'compact' : 'full'}`}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`${compact ? 'h-10' : 'h-12'} border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all`}
          placeholder="john@example.com"
        />
      </div>

      {compact ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="address-compact" className="text-foreground font-medium text-sm">
              Project Address
            </Label>
            <Input
              id="address-compact"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="h-10 border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="123 Main St, Los Angeles, CA"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabinetType-compact" className="text-foreground font-medium text-sm">
              Cabinet Type *
            </Label>
            <Select
              value={formData.cabinetType}
              onValueChange={(value) => setFormData({ ...formData, cabinetType: value })}
              required
              disabled={isSubmitting}
            >
              <SelectTrigger className="h-10 border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all">
                <SelectValue placeholder="Select cabinet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kitchen">Kitchen Cabinets</SelectItem>
                <SelectItem value="bathroom">Bathroom Vanity</SelectItem>
                <SelectItem value="laundry">Laundry Room Cabinets</SelectItem>
                <SelectItem value="garage">Garage Cabinets</SelectItem>
                <SelectItem value="built-in">Built-in Cabinets</SelectItem>
                <SelectItem value="multiple">Multiple Rooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="address" className="text-foreground font-medium text-sm">
              Project Address
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="h-12 border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="123 Main St, Los Angeles, CA"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cabinetType" className="text-foreground font-medium text-sm">
                Cabinet Type *
              </Label>
              <Select
                value={formData.cabinetType}
                onValueChange={(value) => setFormData({ ...formData, cabinetType: value })}
                required
                disabled={isSubmitting}
              >
                <SelectTrigger className="h-12 border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all">
                  <SelectValue placeholder="Select cabinet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Cabinets</SelectItem>
                  <SelectItem value="bathroom">Bathroom Vanity</SelectItem>
                  <SelectItem value="laundry">Laundry Room Cabinets</SelectItem>
                  <SelectItem value="garage">Garage Cabinets</SelectItem>
                  <SelectItem value="built-in">Built-in Cabinets</SelectItem>
                  <SelectItem value="multiple">Multiple Rooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-foreground font-medium text-sm">
                Budget Range
              </Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="h-12 border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="e.g., $2,000-$5,000"
              />
            </div>
          </div>
        </>
      )}

      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-medium text-sm">
            Project Details (Optional)
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="border-2 border-foreground/20 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
            placeholder="Tell us about your cabinet project... (number of cabinets, current color, desired color, etc.)"
          />
        </div>
      )}

      <Button 
        type="submit" 
        disabled={isSubmitting}
        size={compact ? "default" : "lg"}
        className={`w-full bg-accent hover:bg-accent/90 text-white ${compact ? "h-11" : "h-14"} ${compact ? "text-base" : "text-lg"} font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {compact ? "Get Cabinet Quote" : "Get My Free Cabinet Quote"}
          </>
        )}
      </Button>

      {!compact && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Or call us directly:{" "}
            <a 
              href="tel:3238551752" 
              onClick={(e) => {
                e.preventDefault();
                trackCallConversion("tel:3238551752");
              }}
              className="text-accent font-semibold hover:underline"
            >
              <Phone className="w-4 h-4 inline mr-1" />
              (323) 855-1752
            </a>
          </p>
        </div>
      )}
    </form>
  );
};

const CabinetsLanding = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    budget: "",
    cabinetType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactFormToRenoLens({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Cabinet Type: ${formData.cabinetType}\nAddress: ${formData.address}\nBudget: ${formData.budget}\n\n${formData.message}`,
      });
      navigate('/thank-you?source=cabinets');
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: error instanceof Error 
          ? error.message 
          : "There was an error submitting your form. Please try again or call us at (323) 855-1752.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Load Google tag (gtag.js) for ad conversion tracking
    const existingGtagScript = document.querySelector('script[src*="googletagmanager.com/gtag"]');
    if (!existingGtagScript) {
      const gtagScript = document.createElement("script");
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17622987712";
      gtagScript.async = true;
      document.head.appendChild(gtagScript);
    }
  }, []);

  const galleryImages = [
    { image: "/cabinets/IMG_1244.jpg", title: "Kitchen Cabinet Transformation" },
    { image: "/cabinets/IMG_2303.jpg", title: "White Cabinet Refinishing" },
    { image: "/cabinets/IMG_2433.jpeg", title: "Bathroom Vanity Makeover" },
    { image: "/cabinets/IMG_2364.jpg", title: "Modern Cabinet Finish" },
    { image: "/cabinets/IMG_2688.jpg", title: "Cabinet Color Change" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-accent/5 via-background to-muted/5">
      <SEO
        title="Cabinet Refinishing Los Angeles | Free Quote | Gr8 Glaze Refinishing"
        description="Get a free quote for professional cabinet refinishing in Los Angeles. Transform your kitchen cabinets for 70% less than replacement. Expert reglazing, color changes, and modern finishes."
        keywords="cabinet refinishing quote, kitchen cabinet refinishing Los Angeles, cabinet reglazing LA, cabinet painting quote, kitchen cabinet makeover, cabinet resurfacing Los Angeles"
      />
      
      <main className="flex-grow">
        {/* Top Banner Header */}
        <div className="bg-foreground text-background py-3 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm md:text-base font-medium text-center md:text-left">
              Professional Cabinet Refinishing in Los Angeles • Kitchen & Bathroom Cabinets | Free Estimates
            </div>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-2 h-auto rounded-md"
              onClick={() => {
                const formSection = document.getElementById('cabinet-quote-form-section');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              GET A QUOTE
            </Button>
          </div>
        </div>

        {/* Hero Section with Quick Form */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-accent/10 via-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Hero Content */}
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    <Badge className="bg-accent text-white">Free Estimates | Save Up to 70%</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Cabinet Refinishing Experts in Los Angeles
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
                    Don't Replace, Refinish Your Cabinets!
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Transform Your Kitchen in Days, Not Weeks | Quality Warranty | Expert Craftsmanship
                  </p>
                  <div className="space-y-3 mb-6 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Free, no obligation cabinet quote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">No demolition, minimal disruption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Factory-quality finish guaranteed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    A Gr8 Glaze Refinishing cabinet specialist will respond quickly*
                  </p>
                </div>

                {/* Right Side - Quick Form */}
                <Card className="border-2 border-accent/30 shadow-2xl">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-center">Get a Free Cabinet Quote</h2>
                    <CabinetQuoteForm
                      formData={formData}
                      setFormData={setFormData}
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      isSubmitting={isSubmitting}
                      compact={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Refinish Cabinets Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Refinish Your Cabinets?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <TrendingDown className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Save Up to 70%</h3>
                  <p className="text-muted-foreground">
                    New cabinets cost $10,000-$30,000+. Refinishing typically costs $2,000-$5,000 for a complete kitchen transformation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Done in Days</h3>
                  <p className="text-muted-foreground">
                    Most projects completed in 2-5 days. No weeks of construction, dust, or living without a functional kitchen.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Any Color You Want</h3>
                  <p className="text-muted-foreground">
                    Transform dated oak to modern white, or any color you desire. Endless possibilities to match your style.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Durable Finish</h3>
                  <p className="text-muted-foreground">
                    Professional-grade coatings that resist chipping, peeling, and daily wear. Built to last 10-15+ years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cabinet Transformations in Los Angeles</h2>
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galleryImages.map((item, index) => (
                    <CarouselItem 
                      key={index} 
                      className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="overflow-hidden border-2 border-foreground/10 hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12 bg-background border-2 border-foreground/20 hover:bg-background hover:border-accent shadow-lg z-10 [&>svg]:text-foreground [&>svg]:hover:text-accent" />
                <CarouselNext className="right-0 md:-right-12 bg-background border-2 border-foreground/20 hover:bg-background hover:border-accent shadow-lg z-10 [&>svg]:text-foreground [&>svg]:hover:text-accent" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* What We Refinish Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cabinet Types We Refinish</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our professional refinishing services work on virtually any cabinet type. We use specialized coatings and techniques to ensure a beautiful, durable finish.
                </p>
                <ul className="space-y-3">
                  {[
                    "Kitchen cabinets (upper and lower)",
                    "Bathroom vanity cabinets",
                    "Solid wood cabinets",
                    "Laminate and thermofoil cabinets",
                    "MDF and particle board cabinets",
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
                  src="/cabinets/IMG_2688.jpg" 
                  alt="Kitchen cabinet refinishing Los Angeles"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_2426.jpg" 
                  alt="Bathroom vanity cabinet refinishing"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_1234.jpg" 
                  alt="Cabinet color change refinishing"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/cabinets/IMG_3246.jpg" 
                  alt="Modern cabinet refinishing finish"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-muted/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              <div className="p-8 bg-background/80 rounded-lg border-2 border-accent/20 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">70%</div>
                <div className="text-lg text-muted-foreground">Savings vs Replacement</div>
              </div>
              <div className="p-8 bg-background/80 rounded-lg border-2 border-accent/20 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">2-5</div>
                <div className="text-lg text-muted-foreground">Days to Complete</div>
              </div>
              <div className="p-8 bg-background/80 rounded-lg border-2 border-accent/20 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">15+</div>
                <div className="text-lg text-muted-foreground">Years of Durability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Form Section */}
        <section id="cabinet-quote-form-section" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2 border-accent/30 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Cabinet Quote Today</h2>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Free, no obligation quote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">No demolition required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Done in days, not weeks</span>
                    </div>
                  </div>
                </div>
                <CabinetQuoteForm
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  isSubmitting={isSubmitting}
                  compact={false}
                />
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    A Gr8 Glaze Refinishing cabinet specialist will respond quickly*
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CabinetsLanding;
