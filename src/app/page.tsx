import Hero from "@/components/Hero/Hero";
import HeroFeatures from "@/components/HeroFeatures/HeroFeatures";
import HeroShowcase from "@/components/HeroShowcase/HeroShowcase";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import PowerfulFeatures from "@/components/ PowerfulFeatures/PowerfulFeatures";
import ProtocolOverview from "@/components/ProtocolOverview/ProtocolOverview";
import Integration from "@/components/Integration/Integration";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroShowcase />
      <HeroFeatures />
      <HowItWorks />
      <PowerfulFeatures />
      <ProtocolOverview />
      <Integration />
    </>
  );
}
