import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Medal, Gift, GraduationCap, Users, Trophy, Star, ArrowRight, Check } from "lucide-react";

export default function PrizesRewards() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const prizes = [
    {
      title: "Scholarships on Coaching",
      description: "Get up to 100% scholarship on our premium coaching programs for JEE/NEET preparation.",
      icon: Medal,
      gradient: "from-yellow-400 to-orange-400",
      badge: "#1 Prize",
      badgeColor: "bg-yellow-400 text-yellow-900",
      borderColor: "border-yellow-200",
      features: [
        "Complete fee waiver for top scorers",
        "Access to premium study materials", 
        "Personal mentorship included"
      ]
    },
    {
      title: "Amazon Gift Vouchers",
      description: "Win exciting Amazon gift vouchers worth up to ₹10,000 for outstanding performance.",
      icon: Gift,
      gradient: "from-blue-400 to-indigo-400",
      borderColor: "border-blue-200",
      features: [
        "₹10,000 for top 3 students",
        "₹5,000 for next 10 students",
        "₹2,000 for next 20 students"
      ]
    },
    {
      title: "Free Mentorship Session",
      description: "Get personalized guidance from our expert faculty members from IITs & AIIMS.",
      icon: GraduationCap,
      gradient: "from-green-400 to-emerald-400",
      borderColor: "border-green-200",
      features: [
        "One-on-one career counseling",
        "Personalized study plan",
        "College admission guidance"
      ]
    }
  ];

  const stats = [
    { icon: Users, text: "Over 5,000+ students participated last year" },
    { icon: Trophy, text: "₹50+ lakhs worth of scholarships awarded" },
    { icon: Star, text: "100% satisfaction from participants" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" id="prizes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Prizes & Rewards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Exceptional rewards await top performers! Show your talent and win amazing prizes.
          </p>
          <Badge variant="secondary" className="bg-accent text-accent-foreground px-6 py-3 text-base font-semibold">
            🏆 Top 100 students will be featured on our leaderboard!
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <Card 
              key={index}
              className={`card-hover relative overflow-hidden border-2 ${prize.borderColor}`}
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
                <ul className="space-y-2 text-sm text-gray-600">
                  {prize.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-2 w-4 h-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story Section */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Students collaborating in study group" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Win Big?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Join thousands of ambitious students who are taking this opportunity to showcase their talent and win amazing rewards.
                </p>
                <div className="space-y-3 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <stat.icon className="text-primary mr-3 w-5 h-5" />
                      <span>{stat.text}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToRegister}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
