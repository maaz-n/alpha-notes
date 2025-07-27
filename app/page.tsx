import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
import { HeroHeader } from "@/components/header";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
    <HeroHeader/>
    <HeroSection/>
    <Features/>
    <CallToAction/>
    <FooterSection/>
    </>
  );
}
