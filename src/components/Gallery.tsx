import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "All" | "Kitchen" | "Bathroom" | "Epoxy Application";

const galleryItems = [
  {
    id: 1,
    title: "Luxury Bathtub Transformation",
    category: "Bathroom" as Category,
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    id: 2,
    title: "Modern Kitchen Cabinets",
    category: "Kitchen" as Category,
    before: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
  },
  {
    id: 3,
    title: "Elegant Countertop Refinish",
    category: "Kitchen" as Category,
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80"
  },
  {
    id: 4,
    title: "Classic Bathroom Vanity",
    category: "Bathroom" as Category,
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    id: 5,
    title: "Contemporary Kitchen Refresh",
    category: "Kitchen" as Category,
    before: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
  },
  {
    id: 6,
    title: "Spa-Like Bathtub Upgrade",
    category: "Bathroom" as Category,
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80"
  },
  {
    id: 7,
    title: "Garage Epoxy Floor Coating",
    category: "Epoxy Application" as Category,
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    id: 8,
    title: "Basement Epoxy Floor",
    category: "Epoxy Application" as Category,
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80"
  },
  {
    id: 9,
    title: "Commercial Epoxy Flooring",
    category: "Epoxy Application" as Category,
    before: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const categories: Category[] = ["All", "Kitchen", "Bathroom", "Epoxy Application"];
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
    setShowBefore(true);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
    setShowBefore(true);
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-primary">Latest Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See the stunning before and after results of our refinishing work
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedItem(item);
                setShowBefore(true);
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="mb-2 bg-primary">{item.category}</Badge>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm">Click to view before & after</p>
                  </div>
                </div>
              </div>
            </Card>
            ))}
          </div>
        )}

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedItem && (
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={showBefore ? selectedItem.before : selectedItem.after}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {showBefore ? "Before" : "After"}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <Badge className="mb-2">{selectedItem.category}</Badge>
                    <h3 className="text-2xl font-display font-bold">{selectedItem.title}</h3>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowBefore(true)}
                      variant={showBefore ? "default" : "outline"}
                      className="flex-1"
                    >
                      Before
                    </Button>
                    <Button
                      onClick={() => setShowBefore(false)}
                      variant={!showBefore ? "default" : "outline"}
                      className="flex-1"
                    >
                      After
                    </Button>
                  </div>

                  <div className="flex gap-2 justify-between pt-4">
                    <Button
                      onClick={handlePrev}
                      variant="outline"
                      size="icon"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={handleNext}
                      variant="outline"
                      size="icon"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
