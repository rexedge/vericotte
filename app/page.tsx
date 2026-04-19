import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import StatsBar from "@/app/components/StatsBar";
import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "@/app/components/ServicesSection";
import WhyVericotte from "@/app/components/WhyVericotte";
import Testimonials from "@/app/components/Testimonials";
import CTABanner from "@/app/components/CTABanner";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <WhyVericotte />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
