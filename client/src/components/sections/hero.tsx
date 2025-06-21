import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RegistrationForm from "@/components/registration-form";
import { Clock, MapPin, Gift, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register-mobile');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-12 lg:py-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  ⭐ Limited Seats Available
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AllTheClasses Talent Test 2025
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A unique opportunity to showcase your talent and secure a seat in our exclusive coaching program for JEE, NEET, and CBSE (11th & 12th) with personalized learning and small batches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="text-primary mr-2 w-5 h-5" />
                  <span className="font-medium">60 Minutes</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="text-primary mr-2 w-5 h-5" />
                  <span className="font-medium">Multiple Centers Across Delhi</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Gift className="text-primary mr-2 w-5 h-5" />
                  <span className="font-medium">Free Registration & Exciting Prizes</span>
                </div>
              </div>
              {/* Mobile CTA */}
              <div className="lg:hidden">
                <Button 
                  onClick={scrollToRegister}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Register for Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Registration Form - Desktop */}
            <div className="hidden lg:block" id="register">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Registration Form */}
      <section className="lg:hidden py-12 bg-white" id="register-mobile">
        <div className="max-w-md mx-auto px-4">
          <RegistrationForm isMobile />
        </div>
      </section>
    </>
  );
}
