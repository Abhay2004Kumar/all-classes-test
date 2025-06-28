import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const QuizAd = () => {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on home page
    if (location === '/') {
      setIsOpen(true);
      // Add a small delay for the animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsOpen(false), 300); // Wait for fade out
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the fade-out animation to complete before hiding
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ 
            scale: isVisible ? 1 : 0.95, 
            y: isVisible ? 0 : 20 
          }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ 
            type: 'spring',
            damping: 25,
            stiffness: 300,
            duration: 0.3
          }}
        >
          <div className="relative">
            <img 
              src="/images/QUIZ APARTMENTS.png" 
              alt="Quiz Apartments"
              className="w-full h-auto max-h-[70vh] object-contain"
              draggable="false"
            />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/90 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-all z-20 shadow-md hover:scale-105 active:scale-95"
              aria-label="Close ad"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => navigate('/quiz/select')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2.5 px-6 text-base flex-1 max-w-xs transition-all duration-200 hover:shadow-md shadow-amber-200"
              >
                Try Demo Quiz
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  const registerSection = document.getElementById('register');
                  if (registerSection) {
                    registerSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  handleClose();
                }}
                className="border-gray-200 text-gray-800 hover:bg-gray-50 font-medium py-2.5 px-6 text-base flex-1 max-w-xs transition-all duration-200 hover:shadow-md"
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizAd;