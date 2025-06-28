import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="../public/images/image.png" // Replace with your actual image path
                alt="ALI THE CLASSES Logo"
                className="h-16 w-auto" // Adjust height as needed
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors group"
              >
                <span className="flex items-center gap-1">
                  About Test
                  <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors group"
              >
                <span className="flex items-center gap-1">
                  Prizes
                  <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
              <Link 
                href="/quiz/select"
                className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors group"
              >
                <span className="flex items-center gap-1">
                  Select Quiz
                  <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors group"
              >
                <span className="flex items-center gap-1">
                  FAQ
                  <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-amber-200 transition-all"
              >
                Register Now
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-600 hover:bg-amber-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-orange-100">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                About Test
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Prizes
              </button>
              <Link 
                href="/quiz/select"
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Select Quiz
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:bg-amber-50 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 w-full mt-2 shadow-lg hover:shadow-amber-200 transition-all"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}