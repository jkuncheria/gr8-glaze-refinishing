import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sparkles, Droplet, Shield, Ban, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const CareTips = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Care Tips", url: "https://www.gr8glazerefinishing.com/care-tips" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Care & Maintenance Instructions | Bathtub Refinishing Care Tips | Gr8 Glaze Refinishing"
        description="Complete care and maintenance guide for your newly re-glazed bathtub. Learn proper cleaning methods, approved cleaners, and products to avoid. Maintain your warranty with proper care."
        keywords="bathtub care tips, refinishing maintenance, bathtub cleaning guide, re-glazed tub care, refinishing care instructions, bathtub maintenance tips"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Gr8 Glaze Refinishing
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Care & Maintenance Instructions for Your Newly Re-Glazed Tub
              </h2>
              <p className="text-lg text-muted-foreground">
                Thank you for trusting Gr8 Glaze Refinishing to restore your bathtub. Your new finish is designed to last, but like any high-quality surface, it needs proper care to maintain durability and shine.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Cure Time */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Cure Time</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Do not use the tub for 48 hours after completion. This allows the finish to fully cure and harden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid placing mats, bottles, washcloths, or suction-cup accessories directly on the tub surface during the first 7 days.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Daily Use Guidelines */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Daily Use Guidelines</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Rinse the tub with warm water after each use.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Wipe dry with a soft towel or sponge to prevent soap and mineral buildup.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Cleaning Instructions */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Cleaning Instructions</h2>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">Safe Cleaners</h3>
                <p className="text-muted-foreground mb-6">
                  These products are gentle and will not harm the finish:
                </p>

                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Approved Examples</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Dish Soap</TableCell>
                        <TableCell>Dawn, Palmolive, Method</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mild Bathroom Cleaners</TableCell>
                        <TableCell>Scrubbing Bubbles (regular), Formula 409, Mr. Clean Surface Spray</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vinegar/Water Mix</TableCell>
                        <TableCell>50/50 spray for mild buildup</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Soft Tools</TableCell>
                        <TableCell>Non-abrasive sponge or microfiber cloth</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-muted-foreground italic">
                    <strong className="text-foreground">Tip:</strong> Think of your tub like the paint on your car. If you wouldn't use it to clean your car, don't use it on your bathtub.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Products & Tools to Avoid */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <Ban className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Products & Tools to Avoid</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  These will dull, stain, scratch, or strip the protective finish:
                </p>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Do NOT Use</TableHead>
                        <TableHead className="font-semibold">Reason</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Comet, Ajax, Bar Keepers Friend (powders)</TableCell>
                        <TableCell>Abrasive, scratches finish</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Soft Scrub with Bleach</TableCell>
                        <TableCell>Harsh chemicals break down coating</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bleach, Drain Cleaners, Acetone</TableCell>
                        <TableCell>Chemically burns the coating</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Magic Eraser</TableCell>
                        <TableCell>Micro-abrasive, wears down clear coat</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Scouring Pads / Steel Wool</TableCell>
                        <TableCell>Scratches and permanently damages finish</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Suction-Cup Mats or Baskets</TableCell>
                        <TableCell>Causes peeling and lifting of the coating</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Extra Care Tips */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Extra Care Tips</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>No bath mats with suction cups — ever. They pull up the finish.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Do not leave standing water in the tub for long periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Do not place hair dye, nail polish remover, or harsh chemicals in the tub.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid dropping heavy objects, tools, or metal items in the tub.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Warranty Protection */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Warranty Protection</h2>
                    <p className="text-muted-foreground">
                      Proper cleaning and care are required to maintain warranty coverage. Damage caused by abrasives, harsh chemicals, or suction-cup mats is not covered.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="border-t border-border my-12"></div>

            {/* Contact CTA */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  If you ever have a question about a product, send us a picture or text us first. We're happy to guide you.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                  <a href="tel:3238551752">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Footer Message */}
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-2">Thank you for choosing Gr8 Glaze Refinishing.</p>
              <p className="text-lg font-semibold text-foreground">Revive • Refresh • Refinish</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareTips;
