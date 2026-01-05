import { Button } from "@/components/ui/button";
import { Play, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AtlantaNewsFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center gap-2">
                    <span>Featured on</span>
                    <img 
                      src="/anf.png" 
                      alt="Atlanta News First" 
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Gr8 Glaze Refinishing in the News
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're thrilled to share that <span className="font-semibold text-foreground">Gr8 Glaze Refinishing</span> has recently been featured by <span className="font-semibold text-foreground">Atlanta News First!</span> This recognition highlights our commitment to quality resurfacing services that breathe new life into your home.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether it's cabinets, bathtubs, or countertops, our expert team is dedicated to delivering exceptional results that not only enhance the beauty of your space but also extend the life of your surfaces. We're proud to be a <span className="font-semibold text-foreground">trusted name in the community</span> and grateful for the support from our customers and local media alike.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      window.open('https://www.atlantanewsfirst.com/2025/01/23/transform-your-kitchen-or-bathroom-with-surface-pro-refinishing/', '_blank');
                    }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Our Interview
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Visual */}
              <a 
                href="https://www.atlantanewsfirst.com/2025/01/23/transform-your-kitchen-or-bathroom-with-surface-pro-refinishing/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-background hover:opacity-90 transition-opacity cursor-pointer group"
              >
                <img 
                  src="/interview.png" 
                  alt="Gr8 Glaze Refinishing featured on Atlanta News First" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/90 hover:bg-accent rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-background ml-1" fill="currentColor" />
                  </div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AtlantaNewsFeature;

