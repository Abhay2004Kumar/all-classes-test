import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RegistrationForm from "@/components/registration-form";
import { Clock, MapPin, Gift, ArrowRight, Zap, Trophy, Star, BookOpen } from "lucide-react";

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register-mobile');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 lg:py-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-1 text-sm">
                  🚀 LIMITED SEATS ONLY!
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-1 text-sm">
                  🎯 100% FREE REGISTRATION
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  BHEED का HISSA नहीं,<br />
                  SAFALTA का KISSA बनें!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                <span className="font-bold">AllTheClasses Talent Hunt 2025</span> में अपनी प्रतिभा दिखाएं और जीतें <span className="text-amber-600 font-bold">₹1 Lakh+</span> के आकर्षक पुरस्कार!
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <Zap className="text-orange-600 w-5 h-5" />
                    </div>
                    <span className="font-medium">60 min Quiz</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Trophy className="text-blue-600 w-5 h-5" />
                    </div>
                    <span className="font-medium">100+ Rewards</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <BookOpen className="text-green-600 w-5 h-5" />
                    </div>
                    <span className="font-medium">JEE/NEET Scholarship</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Star className="text-purple-600 w-5 h-5" />
                    </div>
                    <span className="font-medium">Certificates for all</span>
                  </div>
                </div>
              </div>

              {/* Hindi Punchlines */}
              <div className="bg-orange-50 border-l-4 border-orange-500 px-4 py-3 mb-8 rounded-r-lg">
                <p className="text-orange-800 font-medium">
                  "सिर्फ 1 घंटे में बदल सकती है आपकी किस्मत!"
                </p>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden space-y-4">
                <Button 
                  onClick={scrollToRegister}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-orange-200 py-6 text-lg font-bold"
                >
                  🎯 Register Now - FREE!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-sm text-gray-500">
                  ⏳ Only for first 500 students!
                </p>
              </div>
            </div>

            {/* Registration Form - Desktop */}
            <div className="hidden lg:block shadow-xl rounded-2xl overflow-hidden bg-white" id="register">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  🎉 Join today and win many more!
                </h3>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Registration Form */}
      <section className="lg:hidden py-12 bg-white" id="register-mobile">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-center rounded-t-xl">
            <h3 className="text-lg font-bold text-white">
              Join today and win many more!
            </h3>
          </div>
          <RegistrationForm isMobile />
          <div className="bg-orange-50 p-4 rounded-b-xl border-t border-orange-200 text-center">
            <p className="text-sm text-orange-800">
              "आज का छोटा सा प्रयास, कल की बड़ी कामयाबी!"
            </p>
          </div>
        </div>
      </section>
    </>
  );
}