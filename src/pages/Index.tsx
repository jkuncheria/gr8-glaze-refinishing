import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import GalleryPreview from "@/components/GalleryPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  const structuredData = [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Gr8 Glaze Refinishing LA | Bathtub & Tile Refinishing Services"
        description="Professional bathtub and tile refinishing (reglazing) services in the LA area. Restore surfaces to look new with specialized coatings. Cost-effective alternative to replacement. Quality warranties available."
        keywords="bathtub refinishing LA, tile resurfacing Los Angeles, bathtub reglazing, tile refinishing, bathroom refinishing, bathtub color change, commercial refinishing, San Fernando Valley refinishing"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <GalleryPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
