import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Clock, Palette, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Diverse Expertise",
    description: "We have a diverse team of professionals with expertise in various areas such as cabinets, countertops, bathrooms, epoxy floors, and more. This means that regardless of the type of upgrades or repairs your home needs, you can rely on us to have the necessary skills and knowledge to complete the work to a high standard.",
  },
  {
    icon: Clock,
    title: "Convenience And Time Savings",
    description: "Dealing with multiple contractors can be time-consuming and complicated. By hiring a company like ours that offers a wide range of services, you can save time and avoid the hassle of coordinating different contractors for different projects. This streamlines the entire process, from initial planning to project completion, making the experience more convenient for you as a homeowner.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effectiveness",
    description: "We provide a variety of services and we offer bundled packages or discounts for multiple projects. This can result in cost savings compared to hiring individual contractors for each specific job.",
  },
  {
    icon: Award,
    title: "Consistent Quality And Standards",
    description: "When you work with a single company for multiple home improvement needs, you can expect a consistent level of quality and workmanship across all projects. We are responsible for maintaining our reputation, so we uphold high standards and ensure customer satisfaction throughout our diverse range of services.",
  },
  {
    icon: Palette,
    title: "Design And Style Consistency",
    description: "Whether you're undergoing multiple upgrades or repairs, having a single company like ours handle the work can help maintain a consistent design aesthetic and style throughout your home. This is especially beneficial when you want to create a cohesive look across different areas, such as kitchen & bathroom renovations and remodels.",
  },
  {
    icon: Users,
    title: "Tailored Solutions",
    description: "A versatile home improvement company like ours can provide customized solutions that meet your specific needs. Whether you're looking for energy-efficient upgrades, accessibility modifications, or aesthetically pleasing enhancements, a company with a broad range of services like ours can tailor their offerings to align with your preferences and requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Pick Us?</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">What We Offer</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
