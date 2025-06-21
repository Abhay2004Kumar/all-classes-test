import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrainFront, ArrowRight } from "lucide-react";

export default function TestLocation() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const center = {
    name: "AllTheClasses Main Center",
    address: "P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091",
    metro: "Near Laxmi Nagar Metro Station",
    landmarks: "Near City Square Mall & Akshardham Temple"
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Test Locations</h2>
          <p className="text-xl text-gray-600">Currently, the test is only available at our Delhi centers.</p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              ⭐ New centers opening soon!
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Center Information */}
          <Card className="card-hover border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-primary-foreground w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{center.name}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">{center.address}</p>
                <div className="text-gray-600 flex items-center">
                  <TrainFront className="mr-2 w-5 h-5 text-primary" />
                  {center.metro}
                </div>
                <p className="text-gray-600">{center.landmarks}</p>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Exact test center location and detailed directions will be shared via email and SMS after registration completion.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="card-hover border-gray-200">
            <CardContent className="p-0">
              <div className="h-80 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3725089345847!2d77.27760761508236!3d28.634308982399975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9b5c5b0c7f%3A0x1e2f8c9a0b1c2d3e!2sLaxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AllTheClasses Test Center Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={scrollToRegister}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Register to Get Test Center Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
