import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, TrendingUp,NotebookPen } from "lucide-react";

export default function WhoShouldApply() {
  const criteria = [
    {
      icon: GraduationCap,
      title: "Students in Class 9th to 12th",
      description: "All high school students looking to assess their current academic level and identify areas for improvement.",
      bgColor: "from-orange-50 to-white",
      borderColor: "border-orange-100",
      iconBg: "bg-primary",
      delay: "0s"
    },
    {
      icon: NotebookPen,
      title: "Preparing for JEE, NEET, or Board exams",
      description: "Students who are serious about competitive exams and want to benchmark their preparation level.",
      bgColor: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      iconBg: "bg-amber-500",  // more vibrant
      delay: "0.2s"
    },
    {
      icon: TrendingUp,
      title: "Students looking to evaluate their academic strengths",
      description: "Anyone who wants to understand their potential and receive guidance on their academic journey.",
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100",
      iconBg: "bg-green-500",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who Should Apply</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This test is perfect for ambitious students who want to evaluate their academic readiness and unlock opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <Card 
              key={index}
              className={`text-center card-hover bg-gradient-to-b ${item.bgColor} ${item.borderColor}`}
            >
              <CardContent className="p-8">
                <div 
                  className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 animate-float`}
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
