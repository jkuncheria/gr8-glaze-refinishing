import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Camera } from "lucide-react";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Define project structure
type Project = {
  projectNumber: number;
  beforeImages: string[];
  afterImages: string[];
};

// Parse and organize images by project
const parseImages = (): Project[] => {
  const imageFiles = [
    // Project 1
    "b1.jpeg", "a1.1.jpeg", "a1.2.jpeg", "a1.3.jpeg", "a1.4.jpeg",
    // Project 2
    "b2.jpeg", "a2.1.jpeg", "a2.2.jpeg",
    // Project 3
    "b3.1.jpeg", "b3.2.jpeg", "b3.3.jpeg", "b3.4.jpeg", "b3.5.jpeg", "a3.1.jpeg", "a3.2.jpeg",
    // Project 4
    "b4.1.jpeg", "b4.2.jpeg", "a4.1.jpeg", "a4.2.jpeg", "a4.3.jpeg",
    // Project 5
    "b5.1.jpeg", "b5.2.jpeg", "b5.3.jpeg", "b5.4.jpeg", "a5.1.jpeg", "a5.2.jpeg", "a5.3.jpeg", "a5.4.jpeg", "a5.5.jpeg", "a5.6.jpeg",
    // Project 6
    "b6.1.jpeg", "b6.2.jpeg", "a6.1.jpeg", "a6.2.jpeg", "a6.3.jpeg",
    // Project 7
    "b7.1.jpeg", "a7.2.jpeg",
  ];

  const projects: { [key: number]: Project } = {};

  imageFiles.forEach((filename) => {
    const isBefore = filename.startsWith('b');
    const isAfter = filename.startsWith('a');
    
    if (isBefore) {
      const match = filename.match(/^b(\d+)(?:\.(\d+))?\.jpeg$/);
      if (match) {
        const projectNum = parseInt(match[1]);
        if (!projects[projectNum]) {
          projects[projectNum] = {
            projectNumber: projectNum,
            beforeImages: [],
            afterImages: [],
          };
        }
        projects[projectNum].beforeImages.push(filename);
      }
    } else if (isAfter) {
      const match = filename.match(/^a(\d+)\.(\d+)\.jpeg$/);
      if (match) {
        const projectNum = parseInt(match[1]);
        if (!projects[projectNum]) {
          projects[projectNum] = {
            projectNumber: projectNum,
            beforeImages: [],
            afterImages: [],
          };
        }
        projects[projectNum].afterImages.push(filename);
      }
    }
  });

  // Sort images within each project
  Object.values(projects).forEach((project) => {
    project.beforeImages.sort((a, b) => {
      const aMatch = a.match(/^b\d+\.(\d+)\.jpeg$/);
      const bMatch = b.match(/^b\d+\.(\d+)\.jpeg$/);
      const aNum = aMatch ? parseInt(aMatch[1]) : 0;
      const bNum = bMatch ? parseInt(bMatch[1]) : 0;
      return aNum - bNum;
    });
    project.afterImages.sort((a, b) => {
      const aNum = parseInt(a.match(/\.(\d+)\.jpeg$/)?.[1] || '0');
      const bNum = parseInt(b.match(/\.(\d+)\.jpeg$/)?.[1] || '0');
      return aNum - bNum;
    });
  });

  return Object.values(projects).sort((a, b) => a.projectNumber - b.projectNumber);
};

const projects = parseImages();

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.gr8glazerefinishing.com/" },
    { name: "Gallery", url: "https://www.gr8glazerefinishing.com/gallery" }
  ]);

  const openImage = (imageName: string, projectNum: number) => {
    const project = projects.find(p => p.projectNumber === projectNum);
    if (project) {
      const projectImages = [...project.beforeImages, ...project.afterImages];
      const index = projectImages.indexOf(imageName);
      setCurrentIndex(index);
      setSelectedImage(imageName);
      setSelectedProject(projectNum);
    }
  };

  const getCurrentProjectImages = (): string[] => {
    if (selectedProject === null) return [];
    const project = projects.find(p => p.projectNumber === selectedProject);
    return project ? [...project.beforeImages, ...project.afterImages] : [];
  };

  const nextImage = () => {
    const projectImages = getCurrentProjectImages();
    const nextIndex = (currentIndex + 1) % projectImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(projectImages[nextIndex]);
  };

  const prevImage = () => {
    const projectImages = getCurrentProjectImages();
    const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(projectImages[prevIndex]);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedProject(null);
  };

  const getImageType = (filename: string): 'before' | 'after' => {
    return filename.startsWith('b') ? 'before' : 'after';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <SEO
        title="Gallery | Gr8 Glaze Refinishing | Our Work Portfolio"
        description="View our portfolio of bathtub and tile refinishing projects. See the quality craftsmanship and beautiful transformations we've completed for homeowners throughout Los Angeles."
        keywords="refinishing gallery, bathtub refinishing photos, tile refinishing portfolio, before and after refinishing, LA refinishing projects"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,167,98,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                Our Work Gallery
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Explore stunning transformations from our portfolio of completed refinishing projects
              </p>
            </div>
          </div>
        </section>

        {/* Gallery by Project */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {projects.map((project, projectIndex) => {
                const hasBoth = project.beforeImages.length > 0 && project.afterImages.length > 0;
                
                return (
                  <div 
                    key={project.projectNumber} 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${projectIndex * 0.1}s` }}
                  >
                    <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-card via-card to-muted/30">
                      <CardContent className="p-0">
                        {/* Project Header */}
                        <div className="relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-8 md:p-12 border-b border-border/50">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                              <Camera className="w-6 h-6 text-background" />
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                              Featured Project {project.projectNumber}
                            </h2>
                          </div>
                        </div>

                        {/* Images Grid */}
                        <div className="p-6 md:p-10">
                          {/* Before Section */}
                          {project.beforeImages.length > 0 && (
                            <div className="mb-12">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-200 to-red-300" />
                                <Badge className="bg-red-500 text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                                  BEFORE
                                </Badge>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-red-200 to-red-300" />
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {project.beforeImages.map((imageName, index) => (
                                  <div
                                    key={imageName}
                                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-red-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    onClick={() => openImage(imageName, project.projectNumber)}
                                  >
                                    <img
                                      src={`/full-gallery/${imageName}`}
                                      alt={`Project ${project.projectNumber} before ${index + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="bg-background/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                                        <ZoomIn className="w-6 h-6 text-accent" />
                                      </div>
                                    </div>
                                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <Badge className="bg-red-500 text-white text-xs">Before</Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Divider */}
                          {hasBoth && (
                            <div className="my-12 flex items-center justify-center">
                              <div className="flex items-center gap-4 w-full max-w-md">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-accent/50" />
                                <div className="w-3 h-3 rounded-full bg-accent/50 border-2 border-accent" />
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/30 to-accent/50" />
                              </div>
                            </div>
                          )}

                          {/* After Section */}
                          {project.afterImages.length > 0 && (
                            <div>
                              <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-200 to-green-300" />
                                <Badge className="bg-green-500 text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                                  AFTER
                                </Badge>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-200 to-green-300" />
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {project.afterImages.map((imageName, index) => (
                                  <div
                                    key={imageName}
                                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted/50 border-2 border-transparent hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    onClick={() => openImage(imageName, project.projectNumber)}
                                  >
                                    <img
                                      src={`/full-gallery/${imageName}`}
                                      alt={`Project ${project.projectNumber} after ${index + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="bg-background/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                                        <ZoomIn className="w-6 h-6 text-accent" />
                                      </div>
                                    </div>
                                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <Badge className="bg-green-500 text-white text-xs">After</Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImage}>
          <DialogContent className="max-w-7xl p-0 bg-background/98 backdrop-blur-xl border-0 shadow-2xl">
            {selectedImage && selectedProject !== null && (
              <div className="relative">
                <button
                  onClick={closeImage}
                  className="absolute top-6 right-6 z-50 w-12 h-12 bg-background/95 hover:bg-background rounded-full flex items-center justify-center shadow-xl border border-border/50 transition-all hover:scale-110"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative aspect-video max-h-[85vh] overflow-hidden bg-muted/30">
                  <img
                    src={`/full-gallery/${selectedImage}`}
                    alt={`Project ${selectedProject} ${getImageType(selectedImage)}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge 
                      className={getImageType(selectedImage) === 'before' 
                        ? "bg-red-500 text-white shadow-lg px-4 py-2 text-sm font-bold" 
                        : "bg-green-500 text-white shadow-lg px-4 py-2 text-sm font-bold"}
                    >
                      {getImageType(selectedImage) === 'before' ? 'BEFORE' : 'AFTER'}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-background via-muted/30 to-background border-t border-border/50">
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    <span className="text-foreground font-bold">Project {selectedProject}</span> • Image {currentIndex + 1} of {getCurrentProjectImages().length}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={prevImage}
                      className="px-6 py-3 bg-accent hover:bg-accent/90 text-background rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 font-semibold"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button>
                    <button
                      onClick={nextImage}
                      className="px-6 py-3 bg-accent hover:bg-accent/90 text-background rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 font-semibold"
                      aria-label="Next image"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
