import { MapPin, Phone } from "lucide-react";
import { trackCallConversion } from "@/lib/gtag";

const ServiceArea = () => {
  const serviceAreas = [
    { city: "Los Angeles", zip: "90001-90099" },
    { city: "San Fernando Valley", zip: "91301-91399" },
    { city: "Burbank", zip: "91501-91510" },
    { city: "Glendale", zip: "91201-91210" },
    { city: "Pasadena", zip: "91101-91110" },
    { city: "Van Nuys", zip: "91401-91413" },
    { city: "Northridge", zip: "91324-91330" },
    { city: "Encino", zip: "91316-91318" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground rounded-full mb-4">
            <MapPin className="h-8 w-8 text-background" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Service Areas
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Proudly serving Los Angeles and surrounding areas with professional bathtub and tile refinishing services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-background border-2 border-foreground rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{area.city}</h3>
                  <p className="text-sm text-foreground/70">ZIP: {area.zip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background border-2 border-foreground rounded-xl p-8 text-center max-w-2xl mx-auto shadow-elegant">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Don't See Your Area?</h3>
          <p className="text-foreground/70 mb-6">
            We may still be able to help! Contact us to check if we serve your location.
          </p>
          <a
            href="tel:3238551752"
            onClick={(e) => {
              e.preventDefault();
              trackCallConversion("tel:3238551752");
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
