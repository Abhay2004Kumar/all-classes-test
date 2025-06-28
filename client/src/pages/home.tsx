import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import AboutTest from "@/components/sections/about-test";
import TestLocation from "@/components/sections/test-location";
import WhoShouldApply from "@/components/sections/who-should-apply";
import PrizesRewards from "@/components/sections/prizes-rewards";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

export default function Home() {
  const scrollToRegister = () => {
    // For mobile, scroll to register-mobile, for desktop scroll to register
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    const elementId = isMobile ? 'register-mobile' : 'register';
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-slate-50">
      <Navigation />
      <PrizesRewards />
      <Hero />
      <AboutTest />
      <TestLocation />
      <WhoShouldApply />
    
      <FAQ />
      <Footer />
      
      {/* Floating Register Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button 
          onClick={scrollToRegister}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
          size="lg"
        >
          <PenTool className="w-4 h-4 mr-2" />
          Register
        </Button>
      </div>
    </div>
  );
}
