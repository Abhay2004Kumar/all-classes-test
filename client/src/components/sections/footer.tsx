import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {

  const quickLinks = [
    { text: "About Test", href: "#about" },
    { text: "Prizes", href: "#prizes" },
    { text: "FAQ", href: "#faq" },
    { text: "Register", href: "#register" }
  ];

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const id = sectionId.replace('#', '');
    let element = null;
    
    // For register link, check both mobile and desktop sections based on viewport
    if (id === 'register') {
      element = window.innerWidth < 1024 
        ? document.getElementById('register-mobile') 
        : document.getElementById('register');
    } else {
      element = document.getElementById(id);
    }
    
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">AllTheClasses</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Specializing in JEE, NEET, and CBSE (11th & 12th) coaching with personalized home tuition and small batches of only 8 students per batch. Join our talent test to secure your seat in our exclusive program.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-300 hover:text-primary transition-colors block py-1"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-primary mr-3 w-5 h-5" />
                <span className="text-gray-300">support@alltheclasses.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-3 w-5 h-5" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 w-5 h-5 mt-1" />
                <span className="text-gray-300">P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AllTheClasses. All rights reserved. | JEE, NEET & CBSE Coaching | Small Batches & Home Tuition
          </p>
        </div>
      </div>
    </footer>
  );
}
