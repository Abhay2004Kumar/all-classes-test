import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { text: "About Test", href: "#about" },
    { text: "Prizes", href: "#prizes" },
    { text: "FAQ", href: "#faq" },
    { text: "Register", href: "#register" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
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
              Empowering students to achieve their dreams through quality education and personalized guidance. Join thousands of successful students who chose AllTheClasses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-left"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-primary mr-3 w-5 h-5" />
                <span className="text-gray-300">contact@alltheclasses.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-3 w-5 h-5" />
                <span className="text-gray-300">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 w-5 h-5 mt-1" />
                <span className="text-gray-300">Head Office – XYZ Nagar, Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AllTheClasses. All rights reserved. | Designed for student success.
          </p>
        </div>
      </div>
    </footer>
  );
}
