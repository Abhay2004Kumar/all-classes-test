import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, BookOpen, DollarSign, Building2, Users, Star } from "lucide-react";

export default function WhyAllTheClasses() {
  const features = [
    {
      icon: Users,
      title: "Small Batches of Only 8 Students",
      description: "Maximum personalized attention with dedicated doubt-solving and individual progress tracking.",
      bgColor: "from-orange-50 to-white",
      borderColor: "border-orange-100",
      iconBg: "bg-primary",
      isHighlight: true
    },
    {
      icon: Presentation,
      title: "Experienced Faculty from IITs & AIIMS",
      description: "Learn from the best minds who have cracked the toughest competitive exams.",
      bgColor: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      iconBg: "bg-brand-blue"
    },
    {
      icon: BookOpen,
      title: "Specialized courses for Boards + JEE/NEET", 
      description: "Comprehensive curriculum covering both board exams and competitive tests.",
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100",
      iconBg: "bg-green-500"
    },
    {
      icon: Building2,
      title: "Modern classrooms in Delhi",
      description: "State-of-the-art facilities designed for optimal learning environment.",
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why AllTheClasses?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Trusted by thousands of students for our proven track record and comprehensive approach to education.
          </p>
          <Badge variant="secondary" className="bg-accent text-accent-foreground px-6 py-3 text-base font-semibold">
            🎯 Our Secret: Only 8 Students Per Batch for Maximum Attention
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`text-center card-hover bg-gradient-to-b ${feature.bgColor} ${feature.borderColor} ${feature.isHighlight ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
            >
              <CardContent className="p-6">
                {feature.isHighlight && (
                  <Badge className="bg-primary text-primary-foreground mb-4">
                    Our USP
                  </Badge>
                )}
                <div className={`w-14 h-14 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Modern classroom with advanced learning technology" 
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
