import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, BookOpen, Clock, Award } from "lucide-react";

interface FacultyStats {
  icon: any;
  title: string;
  value: string;
  description: string;
}

const facultyStats: FacultyStats[] = [
  {
    icon: Star,
    title: "Expert Faculty",
    value: "50+",
    description: "Years of combined teaching experience"
  },
  {
    icon: Users,
    title: "Faculty Members",
    value: "20+",
    description: "Dedicated and passionate educators"
  },
  {
    icon: BookOpen,
    title: "Courses Taught",
    value: "1000+",
    description: "Across various subjects and levels"
  },
  {
    icon: Clock,
    title: "Hours of Teaching",
    value: "10000+",
    description: "Dedicated to student success"
  },
  {
    icon: Award,
    title: "Awards Won",
    value: "50+",
    description: "Academic excellence recognized"
  }
];

interface FacultyMember {
  name: string;
  designation: string;
  experience: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Vikram Sagar Sir",
    designation: "Chemistry Faculty",
    experience: "10 Years Experience",
    image: "/images/faculty/Vikram Sagar.png"
  },
  {
    name: "Rajeev Lal Sir",
    designation: "Physics Faculty",
    experience: "30 Years Experience",
    image: "/images/faculty/rajeev lal.png"
  },
  {
    name: "Gyanendra Singh Sir",
    designation: "Biology Faculty",
    experience: "20 Years Experience",
    image: "/images/faculty/gyanendra sing.png"
  }
];

export default function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    const container = document.querySelector('.faculty-carousel-container') as HTMLDivElement | null;
    if (container) {
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Expert Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished educators who bring years of experience and expertise to every classroom.
          </p>
        </div>

        <div className="relative">
          {/* Mobile Carousel */}
          <div className="block sm:hidden">
            <div className="relative">
              <div 
                className="overflow-x-auto pb-12 faculty-carousel-container"
                onScroll={handleScroll}
              >
                <div className="flex gap-6 px-4">
                  {facultyMembers.map((member, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl min-w-[300px] flex-shrink-0"
                    >
                      <div className="mb-8">
                        <div className="relative w-40 h-40 mx-auto">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10"></div>
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 rounded-full object-cover mx-auto relative z-10"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = '/images/default-avatar.png'; // Add a default avatar image
                            }}
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-gray-600 mb-4">{member.designation}</p>
                      <p className="text-xl text-gray-600 mb-4">{member.experience}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {facultyMembers.map((_, index) => (
                    <div 
                      key={index} 
                      onClick={() => scrollToIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-primary'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {facultyMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-8">
                    <div className="relative w-40 h-40 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10"></div>
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover mx-auto relative z-10"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.designation}</p>
                  <p className="text-xl text-gray-600 mb-4">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
