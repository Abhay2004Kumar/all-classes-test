import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Medal, Gift, GraduationCap, Users, Trophy, Star, ArrowRight, Check, Award, Zap, Smile } from "lucide-react";

export default function PrizesRewards() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const prizes = [
    {
      title: "🏆 Grand Scholarship Prize",
      description: "Full tuition coverage for our elite coaching program!",
      icon: Medal,
      gradient: "from-yellow-400 to-orange-500",
      badge: "Top Prize",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
      borderColor: "border-yellow-300",
      features: [
        "100% scholarship for top scorer",
        "50% scholarship for top 10",
        "25% scholarship for top 50"
      ],
      emoji: "💰"
    },
    {
      title: "🎁 Exclusive Gift Bonanza",
      description: "Tech gadgets & shopping sprees await winners!",
      icon: Gift,
      gradient: "from-blue-400 to-purple-500",
      borderColor: "border-blue-300",
      features: [
        "₹20,000 Amazon voucher (1st prize)",
        "₹10,000 shopping spree (2nd-3rd)",
        "₹5,000 gift cards (4th-10th)"
      ],
      emoji: "🛍️"
    },
    {
      title: "📜 Certificate + Mentorship",
      description: "Every participant gets recognition & guidance!",
      icon: Award,
      gradient: "from-green-400 to-teal-500",
      borderColor: "border-green-300",
      features: [
        "Personalized e-certificate",
        "1-on-1 career counseling",
        "Study plan from IIT/NIT mentors"
      ],
      emoji: "👨‍🏫"
    }
  ];

  const stats = [
    { icon: Users, text: "10,000+ students competing this year", emoji: "👥" },
    { icon: Trophy, text: "₹1 Lakh+ in total prizes", emoji: "💎" },
    { icon: Smile, text: "98% satisfaction rate", emoji: "😊" },
    { icon: Zap, text: "Instant results & leaderboard", emoji: "⚡" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" id="prizes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-600 border-orange-200 px-4 py-1 text-sm font-medium">
            🚀 Limited Time Opportunity
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Win <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Life-Changing</span> Rewards!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Test your skills against India's brightest minds and claim your share of amazing prizes!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2">
              🎯 100% Free Participation
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              🏅 E-Certificate for All
            </Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              💰 ₹1 Lakh+ in Prizes
            </Badge>
          </div>
        </div>

        {/* Prize Cards - Mobile Carousel Style */}
        <div className="md:hidden mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-4 w-max px-4">
            {prizes.map((prize, index) => (
              <div key={index} className="w-72 flex-shrink-0">
                <Card className={`h-full border-2 ${prize.borderColor} shadow-lg`}>
                  <CardContent className="p-6">
                    {prize.badge && (
                      <div className={`absolute top-0 right-0 ${prize.badgeColor} px-3 py-1 rounded-bl-lg text-sm font-bold`}>
                        {prize.badge}
                      </div>
                    )}
                    <div className={`w-14 h-14 bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <prize.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{prize.title}</h3>
                    <p className="text-gray-600 text-center text-sm mb-4">{prize.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {prize.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="text-green-500 mr-2 w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Prize Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <Card 
              key={index}
              className={`h-full border-2 ${prize.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {prize.badge && (
                <div className={`absolute top-0 right-0 ${prize.badgeColor} px-3 py-1 rounded-bl-lg text-sm font-bold`}>
                  {prize.badge}
                </div>
              )}
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <prize.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{prize.title}</h3>
                <p className="text-gray-600 text-center mb-6">{prize.description}</p>
                <ul className="space-y-3 text-gray-600">
                  {prize.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="max-w-md mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why 10,000+ Students Are Participating</h3>
                <p className="text-lg text-gray-600 mb-8">
                  "This quiz changed my academic journey! I won a full scholarship and got mentored by IIT toppers."
                  <span className="block mt-2 font-medium">- Rohan K., AIR 127 JEE Advanced</span>
                </p>
                
                <div className="space-y-4 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                        <stat.icon className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{stat.text}</p>
                        <span className="text-2xl">{stat.emoji}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center">
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-white w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Success Starts Here!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Every participant receives a <span className="font-bold">personalized e-certificate</span> - perfect for your portfolio and college applications!
                </p>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>Free participation with no hidden costs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>National-level recognition</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>Boost your academic profile</span>
                  </div>
                </div>
                
               
                
                <p className="text-sm text-gray-500 mt-4">
                  ⏳ Registration closes soon! Don't miss your chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}