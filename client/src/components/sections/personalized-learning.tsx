import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Clock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function PersonalizedLearning() {
  const benefits = [
    {
      icon: Users,
      title: "Individual Attention",
      description: "With only 8 students per batch, every student gets personalized focus and mentoring.",
      stats: "12.5% individual time vs 2.5% in large batches"
    },
    {
      icon: Target,
      title: "Customized Learning Path",
      description: "Tailored study plans based on each student's strengths and improvement areas.",
      stats: "100% personalized curriculum design"
    },
    {
      icon: Clock,
      title: "Instant Doubt Resolution",
      description: "Immediate clarification of concepts without waiting in long queues.",
      stats: "Average 2-minute doubt resolution time"
    },
    {
      icon: TrendingUp,
      title: "Faster Progress Tracking",
      description: "Regular assessments and detailed feedback to monitor academic growth.",
      stats: "Weekly progress reports for parents"
    }
  ];

  const outcomes = [
    "40% better concept retention compared to large batches",
    "3x more practice problems solved per student",
    "95% students show improvement within first month",
    "Personal mentor assigned to each student"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground px-6 py-3 text-base font-semibold mb-6">
            🎯 Our Unique Approach
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Only 8 Students Per Batch?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of personalized learning with our small batch system designed for maximum student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="card-hover border-orange-100 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-primary-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {benefit.stats}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Results</h3>
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-accent rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Ready to Experience Small Batch Learning?</h4>
              <p className="text-white/90 mb-4">
                Join our talent test to see if you qualify for our exclusive 8-student batches.
              </p>
              <div className="flex items-center text-white font-medium">
                <span>Register now for free assessment</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Small group learning session with personalized attention" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                <div className="text-3xl font-bold text-primary mb-1">8</div>
                <div className="text-sm text-gray-600">Students per batch</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-orange-100">
                <div className="text-3xl font-bold text-primary mb-1">1:8</div>
                <div className="text-sm text-gray-600">Teacher ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}