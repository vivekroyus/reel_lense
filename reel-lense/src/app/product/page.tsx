"use client";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import FeaturesSection from "@/components/features-section";
import CtaSection from "@/components/cta-section";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <CtaSection />
      <FooterSection />
    </>
  );
}