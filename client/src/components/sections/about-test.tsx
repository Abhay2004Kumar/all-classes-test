import { Card, CardContent } from "@/components/ui/card";
import { Building, Book, Clock, Calendar, Timer, Info, GraduationCap } from "lucide-react";

export default function AboutTest() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About the Test</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive assessment designed to evaluate your academic strengths and help you prepare for your dream college.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-hover bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary-foreground w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Mode</h3>
              <p className="text-gray-600">Offline test conducted at AllTheClasses centers in Delhi with pen & paper format for authentic exam experience.</p>
            </CardContent>
          </Card>

                <Card className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Subjects Covered</h3>
          <p className="text-gray-600">
            Class-specific questions in Science, Mathematics, and Logical Reasoning curated for students from 9th to 12th grade.
          </p>
        </CardContent>
      </Card>

          <Card className="card-hover bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">60 minutes of focused assessment designed to test your knowledge and problem-solving skills effectively.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Test Date & Time</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="mr-3 w-5 h-5" />
                  <span className="font-medium">Date: [To be announced soon]</span>
                </div>
                <div className="flex items-center">
                  <Timer className="mr-3 w-5 h-5" />
                  <span className="font-medium">Time: [Will be shared post registration]</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Info className="mr-2 w-4 h-4" />
                <span className="font-medium">Details shared after registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
