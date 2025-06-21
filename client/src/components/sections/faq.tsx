import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is the test free to attend?",
      answer: "Yes, the AllTheClasses Talent Test is completely free to attend. There are no registration fees or hidden charges. We believe in providing equal opportunities to all students."
    },
    {
      question: "Where is the test held?",
      answer: "The test is conducted at our Delhi centers. The exact location will be shared with you after successful registration via email and SMS. We have multiple centers across Delhi for your convenience."
    },
    {
      question: "Do I need to bring anything?",
      answer: "Yes, you need to bring a pen and your admit slip (which will be sent to you via email after registration). We recommend bringing a backup pen and carrying a water bottle. Mobile phones are not allowed during the test."
    },
    {
      question: "Can I register on the day of the test?",
      answer: "No, prior registration is mandatory. Walk-in registrations are not accepted on the test day. Please register online at least 24 hours before the test date to ensure your seat is confirmed."
    },
    {
      question: "What happens after I complete the test?",
      answer: "Your results will be processed within 3-5 working days. You'll receive your scorecard via email along with detailed performance analysis. Winners will be contacted separately for prize distribution and scholarship information."
    },
    {
      question: "How can I prepare for the test?",
      answer: "The test covers your current syllabus, so regular study is the best preparation. Focus on Science, Mathematics, and Logical Reasoning. We'll send you a preparation guide and sample questions after registration."
    }
  ];

  return (
    <section className="py-16 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers! Here are the most common queries about our talent test.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@alltheclasses.com" 
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
