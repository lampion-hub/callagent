import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import CTABanner from "@/components/CTABanner";
import Features from "@/components/Features";
import TabsSection from "@/components/TabsSection";
import Testimonials from "@/components/Testimonials";
import ProductFeatures from "@/components/ProductFeatures";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <CTABanner />
        <Features />
        <TabsSection />
        <Testimonials />
        <ProductFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
