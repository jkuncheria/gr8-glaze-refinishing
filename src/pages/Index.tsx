import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import GalleryPreview from "@/components/GalleryPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getWebSiteSchema, getFAQSchema } from "@/lib/structuredData";

const Index = () => {
  const faqs = [
    {
      question: "What is bathtub refinishing?",
      answer: "Bathtub refinishing, also known as reglazing, is a process that restores old, chipped, faded, or dated bathtubs to a new, flawless finish using specialized coatings. It's a cost-effective alternative to full replacement, saving thousands of dollars while extending the life of your existing tub."
    },
    {
      question: "How long does bathtub refinishing take?",
      answer: "Most bathtub refinishing projects are completed in one day. The process typically takes 4-6 hours, and your bathtub is ready to use within 24-48 hours after application. This is much faster than a full replacement, which can take weeks."
    },
    {
      question: "How much does bathtub refinishing cost compared to replacement?",
      answer: "Bathtub refinishing typically costs 70-80% less than full replacement. While a new bathtub installation can cost $3,000-$8,000 or more, refinishing usually ranges from $400-$800, making it a highly cost-effective solution for updating your bathroom."
    },
    {
      question: "Do you offer warranties on refinishing work?",
      answer: "Yes, we offer quality warranties on all our refinishing work. The specific warranty terms depend on the type of surface and finish applied. We stand behind our work and are committed to ensuring your satisfaction."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Los Angeles, San Fernando Valley, Burbank, Glendale, Pasadena, Van Nuys, Northridge, Encino, and surrounding LA area communities. Contact us to confirm if we service your specific location."
    },
    {
      question: "Can you change the color of my bathtub or tiles?",
      answer: "Yes! Color changes are one of our popular services. We can transform your bathtub or tiles from any color to another, such as updating powder blue to white, or any other color you prefer. This allows you to modernize your space without the cost of replacement."
    }
  ];

  const structuredData = [
    getLocalBusinessSchema(), // Includes aggregateRating and social media links
    getWebSiteSchema(),
    getFAQSchema(faqs),
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
