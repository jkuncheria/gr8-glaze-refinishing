import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Phone, XCircle, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Warranty = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Warranty", url: "https://www.gr8glazerefinishing.com/warranty" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="5-Year Limited Warranty | Gr8 Glaze Refinishing | Bathtub Refinishing Warranty"
        description="Gr8 Glaze Refinishing offers a comprehensive 5-year limited warranty on bathtub refinishing services. Learn about warranty coverage, exclusions, and customer responsibilities."
        keywords="bathtub refinishing warranty, refinishing warranty LA, 5 year warranty, bathtub resurfacing warranty, refinishing service warranty, warranty coverage"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Gr8 Glaze Refinishing
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Limited 5-Year Warranty – Bathtub Refinishing
              </h2>
              <p className="text-lg text-muted-foreground">
                This Limited Warranty is provided by Gr8 Glaze Refinishing and applies to the professional refinishing of the bathtub surface listed on the customer's invoice. This warranty is valid for five (5) years from the date of completion and covers defects in workmanship and coating adhesion under normal residential use.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* What This Warranty Covers */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">What This Warranty Covers</h2>
                </div>
                <p className="text-muted-foreground mb-4">We warrant that:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>The coating will remain adhered to the tub surface.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>The finish will not peel, bubble, or crack due to workmanship or material failure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Touch-up or repair, if needed and covered, will be performed at no labor cost to the customer.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* What This Warranty Does Not Cover */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">What This Warranty Does Not Cover</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  This warranty does not cover damage or failure caused by:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Abrasive cleaners (Comet, Ajax, Bar Keepers Friend, Soft Scrub, Magic Eraser, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Harsh chemicals (bleach, acids, acetone, paint thinner, drain cleaners, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Suction-cup mats or baskets, rugs, or accessories placed directly on the tub surface.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Standing water left in the tub for extended periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Chips, scratches, or impact damage caused by dropping objects (soap dishes, tools, razors, toys, etc.).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Plumbing leaks or moisture damage caused by improper caulking or grout failure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Discoloration or staining caused by:</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-primary mt-1">•</span>
                    <span>Bath oils</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-primary mt-1">•</span>
                    <span>Hair dyes</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-primary mt-1">•</span>
                    <span>Self-tanners</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-primary mt-1">•</span>
                    <span>Colored shampoos/soaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Damage caused by excessively hard water, mineral deposits, or failure to clean properly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Use of commercial cleaning crews, hotel staff, Airbnb turnovers, or environments outside standard residential use.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Customer Responsibilities */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Customer Responsibilities</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  To maintain warranty coverage, the customer must:
                </p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-2">
                  <li>Follow the Care Instructions provided at completion.</li>
                  <li>Do not use the tub for 48 hours after refinishing.</li>
                  <li>Do not use suction-cup mats at any time.</li>
                  <li>Clean only with approved non-abrasive cleaners and soft cloths.</li>
                  <li>Maintain caulking and plumbing to prevent water intrusion.</li>
                </ol>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* If Service is Needed */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">If Service is Needed</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  If you believe warranty repair is required:
                </p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-2 mb-4">
                  <li>Contact Gr8 Glaze Refinishing by phone, text, or email.</li>
                  <li>Provide photos of the area of concern.</li>
                  <li>We will schedule an evaluation and determine warranty eligibility.</li>
                </ol>
                <p className="text-muted-foreground">
                  If damage is found to be non-warranty related, repairs can be performed at a standard service rate.
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Transferability */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Transferability</h2>
                </div>
                <p className="text-muted-foreground">
                  This warranty is for the original customer only and is not transferable if the property is sold, rented, or leased.
                </p>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Limitations */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Limitations</h2>
                    <p className="text-muted-foreground mb-4">
                      Gr8 Glaze Refinishing is not responsible for:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Incidental damages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Secondary damages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Loss of use or cost of alternative accommodations</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      This warranty applies to the refinished coating only, not the underlying tub structure or plumbing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Agreement */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Agreement</h2>
                <p className="text-muted-foreground">
                  Use of the refinished tub constitutes acceptance of the terms in this Limited Warranty.
                </p>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Have a Warranty Question?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us by phone, text, or email if you have any questions about your warranty or need to file a claim.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:3238551752">(323) 855-1752</a>
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

export default Warranty;
