import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Define project preview structure - one before and one after from each project
const projectPreviews = [
  {
    projectNumber: 1,
    before: "b1.jpeg",
    after: "a1.1.jpeg",
  },
  {
    projectNumber: 2,
    before: "b2.jpeg",
    after: "a2.1.jpeg",
  },
  {
    projectNumber: 3,
    before: "b3.1.jpeg",
    after: "a3.1.jpeg",
  },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,167,98,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See the quality craftsmanship and beautiful transformations we've completed for homeowners throughout Los Angeles
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto mb-10">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {projectPreviews.map((project, index) => (
                <Card
                  key={project.projectNumber}
                  className="flex-shrink-0 w-[320px] border-0 shadow-xl overflow-hidden bg-gradient-to-br from-card via-card to-muted/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    {/* Project Header */}
                    <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-4 border-b border-border/50">
                      <h3 className="text-xl font-display font-bold text-center">
                        Featured Project {project.projectNumber}
                      </h3>
                    </div>
                    
                    {/* Before/After Images */}
                    <div className="p-4 space-y-4">
                      {/* Before */}
                      <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                        <img
                          src={`/full-gallery/${project.before}`}
                          alt={`Project ${project.projectNumber} before`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-red-500 text-white text-xs">Before</Badge>
                        </div>
                      </div>
                      
                      {/* After */}
                      <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-green-200 transition-all duration-300 hover:shadow-xl">
                        <img
                          src={`/full-gallery/${project.after}`}
                          alt={`Project ${project.projectNumber} after`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-green-500 text-white text-xs">After</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectPreviews.map((project, index) => (
              <Card
                key={project.projectNumber}
                className="border-0 shadow-xl overflow-hidden bg-gradient-to-br from-card via-card to-muted/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 border-b border-border/50">
                    <h3 className="text-2xl font-display font-bold text-center">
                      Featured Project {project.projectNumber}
                    </h3>
                  </div>
                  
                  {/* Before/After Images */}
                  <div className="p-6 space-y-4">
                    {/* Before */}
                    <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                      <img
                        src={`/full-gallery/${project.before}`}
                        alt={`Project ${project.projectNumber} before`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/95 backdrop-blur-sm rounded-full p-3 shadow-xl">
                          <ZoomIn className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-red-500 text-white text-xs">Before</Badge>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="flex items-center justify-center py-2">
                      <div className="flex items-center gap-2 w-full max-w-xs">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-accent/50" />
                        <div className="w-2 h-2 rounded-full bg-accent/50 border border-accent" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/30 to-accent/50" />
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-green-200 transition-all duration-300 hover:shadow-xl">
                      <img
                        src={`/full-gallery/${project.after}`}
                        alt={`Project ${project.projectNumber} after`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/95 backdrop-blur-sm rounded-full p-3 shadow-xl">
                          <ZoomIn className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-green-500 text-white text-xs">After</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="group bg-accent hover:bg-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-10 py-7 rounded-xl font-semibold text-lg"
          >
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
