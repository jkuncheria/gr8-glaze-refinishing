import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Droplet, 
  Sparkles,
  Building2,
  FileText,
  Info,
  Ban,
  Thermometer,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { trackCallConversion } from "@/lib/gtag";

const GlazeGuardPro = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "GlazeGuard Pro", url: "https://www.gr8glazerefinishing.com/glazeguard-pro" }
  ]);

  const technicalBullets = [
    "Zero VOC / No Odor",
    "No Spray Application",
    "Self-Leveling Polymer-Acrylic Hybrid",
    "Nano-Ceramic Abrasion Resistance",
    "Mold & Mildew Resistant",
    "Waterproof & Chemical Resistant",
    "Fast Cure: Touch Dry 2–4 Hours",
    "Full Cure: 24–48 Hours",
    "For Interior Surfaces Only",
    "Professional Use Only"
  ];

  const surfacePrepSteps = [
    "Clean surface thoroughly using an industrial cleaner or degreaser.",
    "Remove all soap scum, oils, minerals, and residue.",
    "Mechanically sand the surface using 220–320 grit abrasive.",
    "Remove dust with a lint-free cloth.",
    "Mask and protect surrounding areas as needed.",
    "Apply primer if recommended for specific substrate."
  ];

  const applicationSteps = [
    "Stir material thoroughly before use.",
    "Apply with a high-density foam roller or professional-grade brush.",
    "Maintain even, consistent film thickness.",
    "Allow proper leveling time before applying additional coats.",
    "Avoid excessive back-rolling — product self-levels naturally.",
    "Do not apply in temperatures below 60°F (16°C).",
    "Allow appropriate cure time before exposing surface to moisture."
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="GlazeGuard Pro™ | VOC-Free Professional Coating | Gr8 Glaze Refinishing"
        description="GlazeGuard Pro™ - Zero odor, VOC-free polymer coating for commercial facilities. Safe for hotels, hospitals, and nursing homes. No shutdown required. Professional use only."
        keywords="GlazeGuard Pro, VOC-free coating, odorless refinishing, commercial bathtub coating, hospital safe coating, zero odor coating, professional refinishing product"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/glazeguard.png" 
                  alt="GlazeGuard Pro Product" 
                  className="max-w-xs md:max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                GlazeGuard Pro™
              </h1>
              <p className="text-2xl md:text-3xl font-display font-semibold mb-6 text-accent">
                Zero Odor. Zero Shutdown. Total Protection.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                VOC-free, odorless, no-spray polymer coating engineered for commercial facilities that require safe, fast, and durable refinishing.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Use Case Emphasis */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 mb-8 shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-background" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Perfect for Facilities That Can't Have Smells</h2>
                </div>
                <p className="text-lg text-foreground mb-4 font-medium">
                  GlazeGuard Pro™ is specifically engineered for commercial facilities where traditional refinishing coatings are impossible due to their strong odors and harmful fumes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Healthcare Facilities</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Hospitals — No disruption to patient care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Nursing Homes — Safe for residents with respiratory issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Assisted Living — No need to relocate residents</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Hospitality & Education</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Hotels — Refinish without closing rooms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Schools — Safe for students and staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Any Occupied Facility — Zero shutdown required</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-foreground font-semibold mb-2">Why This Matters:</p>
                  <p className="text-muted-foreground">
                    Traditional refinishing coatings require evacuating rooms, shutting down operations, and exposing occupants to harmful VOCs and strong odors. GlazeGuard Pro™ eliminates all of this — you can refinish bathrooms, tubs, and showers while facilities remain fully operational and occupied.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Product Description</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  GlazeGuard Pro™ is a next-generation, high-bond polymer acrylic hybrid coating infused with nano-ceramic reinforcement technology. Developed specifically for hospitals, nursing homes, schools, hotels, and other fully occupied environments where traditional refinishing is impossible due to odor and safety concerns.
                </p>
                <p className="text-muted-foreground mb-4">
                  This VOC-free, odorless coating is designed for bathtubs, tile, shower pans, and hard surfaces in facilities that cannot afford to shut down operations or expose occupants to harmful fumes. The advanced self-leveling formula provides a durable, waterproof, and chemical-resistant finish without spraying or ventilation systems.
                </p>
                <p className="text-muted-foreground">
                  GlazeGuard Pro™ rolls or brushes on smoothly, self-levels to a glossy professional finish, and cures to a non-porous, easy-to-clean surface ideal for high-traffic environments. With zero odor and zero VOCs, GlazeGuard Pro™ enables maintenance teams and certified applicators to refinish bathrooms, tubs, and showers without shutting down operations or relocating guests, patients, or residents.
                </p>
              </CardContent>
            </Card>

            {/* Promotional Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/glazeguard/glazeguard5.JPG" 
                alt="Trusted by Facilities That Can't Afford Odors - Hospitals, Nursing Homes, Schools, Hotels, Assisted Living" 
                className="max-w-full md:max-w-2xl h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Key Benefits Quote */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-foreground italic leading-relaxed">
                      "Here's the truth: you need bathrooms safe enough for seniors and patients, but strong enough for daily facility use. Every other coating forces you to relocate people and disrupt care — GlazeGuard doesn't.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Technical Features */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Technical Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalBullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Surface Preparation */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Surface Preparation</h2>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  (All surfaces must be clean, dry, and properly abraded.)
                </p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-2">
                  {surfacePrepSteps.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Application Instructions */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Application Instructions</h2>
                </div>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-2">
                  {applicationSteps.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Recoat & Cure Times */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Recoat & Cure Times</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Touch Dry:</strong> 2–4 Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Recoat Window:</strong> 4–6 Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Light Use:</strong> 12–24 Hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Full Cure:</strong> 48 Hours</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4 italic">
                  Temperature and humidity may extend cure times.
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Coverage & Storage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Coverage</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Approximately 60–120 sq ft per quart, depending on surface texture and application method.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Storage & Handling</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Store between 60°F–85°F (16°C–29°C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Do not freeze</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Keep container tightly sealed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Keep out of direct sunlight</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Clean-Up */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Clean-Up</h3>
                <p className="text-muted-foreground">
                  Clean tools immediately with warm water and mild detergent.
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Safety Information */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Caution / Safety Information</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>For professional use only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid contact with eyes and skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Use protective gloves and safety glasses during application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep container closed when not in use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep out of reach of children and pets</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-foreground">First Aid</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Eyes:</strong> Rinse with clean water for 15 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Skin:</strong> Wash with soap and water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Ingestion:</strong> Do not induce vomiting; seek medical help</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-foreground">Disposal</h3>
                <p className="text-muted-foreground">
                  Dispose of empty containers and unused product in accordance with local regulations.
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Professional Use Notice */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Use Only</h2>
                    <p className="text-muted-foreground">
                      GlazeGuard Pro™ is designed for use by certified applicators and professional maintenance teams. This product is ideal for commercial facilities including hotels, hospitals, nursing homes, and other fully occupied environments where zero odor and zero shutdown are critical requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in GlazeGuard Pro™?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to learn more about GlazeGuard Pro™ and how it can benefit your facility. Our team can provide detailed specifications, application guidance, and pricing information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a 
                      href="tel:3238551752"
                      onClick={(e) => {
                        e.preventDefault();
                        trackCallConversion("tel:3238551752");
                      }}
                    >(323) 855-1752</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Footer Message */}
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-foreground mb-2">Gr8 Glaze Refinishing</p>
              <p className="text-lg font-semibold text-foreground">Revive • Refresh • Refinish</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlazeGuardPro;

