import { useState } from "react";
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
            <span className="text-2xl font-bold text-primary">AllTheClasses</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Test
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Prizes
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                    Quiz
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => window.location.href = '/quiz/select'}>
                    Select Quiz
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
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
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                About Test
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Prizes
              </button>
              <button 
                onClick={() => window.location.href = '/quiz/11th'}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                11th Class Quiz
              </button>
              <button 
                onClick={() => window.location.href = '/quiz/12th'}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                12th Class Quiz
              </button>
              <button 
                onClick={() => window.location.href = '/quiz/dropper'}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Dropper Quiz
              </button>
              <button 
                onClick={() => window.location.href = '/quiz/cbse'}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                CBSE Quiz
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
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
