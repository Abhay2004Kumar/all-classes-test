import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrainFront, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function TestLocation() {
  const scrollToRegister = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // For mobile, check for mobile-specific register section first
    const isMobile = window.innerWidth < 1024;
    const registerId = isMobile ? 'register-mobile' : 'register';
    const element = document.getElementById(registerId);
    
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${registerId}`);
    } else {
      // Fallback to default behavior if specific element not found
      const fallbackElement = document.getElementById('register');
      if (fallbackElement) {
        fallbackElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle mobile touch events
  useEffect(() => {
    const button = document.querySelector('.register-button');
    
    const handleClick = (e: Event) => {
      scrollToRegister(e as unknown as React.MouseEvent);
    };
    
    if (button) {
      button.addEventListener('click', handleClick);
      button.addEventListener('touchstart', handleClick, { passive: false });
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
        button.removeEventListener('touchstart', handleClick);
      }
    };
  }, []);

  const center = {
    name: "All The Classes",
    address: "P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091",
    metro: "Nearest Metro: Mayur Vihar Phase-1 (Pink Line) - 5 min walk",
    landmarks: "Near Ahlcon Public School, Opposite Supreme Enclave, Close to Shashi Garden",
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.726625742413!2d77.28982877592306!3d28.607976875678194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce517765fb9eb%3A0x184e9263aeb4df3f!2sAll%20The%20Classes!5e0!3m2!1sen!2sin!4v1751115308145!5m2!1sen!2sin";

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Test Locations
          </h2>
          <p className="text-xl text-gray-600">
            Currently, the test is only available at our Delhi centers.
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              ⭐ New centers opening soon!
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Center Information */}
          <Card className="border-gray-200 h-full">
            <CardContent className="p-6 md:p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-primary-foreground w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {center.name}
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">{center.address}</p>
                <div className="text-gray-600 flex items-center">
                  <TrainFront className="mr-2 w-5 h-5 text-primary" />
                  {center.metro}
                </div>
                <p className="text-gray-600">{center.landmarks}</p>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Exact test center location and
                  directions will be sent via email and SMS after registration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Google Map Embed - Fixed */}
          <Card className="border-gray-200 h-full">
            <CardContent className="p-0 h-full">
              <div className="relative pb-[75%] h-0 overflow-hidden rounded-lg">
                <iframe
                  src={mapUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All The Classes - Test Center Map"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={scrollToRegister}
            className="register-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
          >
            Register to Get Test Center Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}