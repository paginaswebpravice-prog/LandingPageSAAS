import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import DashboardSection from "./components/DashboardSection";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <DashboardSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
