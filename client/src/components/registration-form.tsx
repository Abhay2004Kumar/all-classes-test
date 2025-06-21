import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { useState } from "react";

interface RegistrationFormProps {
  isMobile?: boolean;
}

export default function RegistrationForm({ isMobile = false }: RegistrationFormProps) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      grade: "",
      contact: "",
      email: "",
      school: "",
      address: "",
    },
  });

  const onSubmit = async (data: {
    name: string;
    grade: string;
    contact: string;
    email: string;
    school: string;
    address: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/register`, data);
      toast({
        title: "Success",
        description: response.data.message || "Registration successful!",
        variant: "default",
      });
      console.log("Registration data:", data);
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`${isMobile ? 'shadow-xl border-orange-100' : 'shadow-xl border-orange-100'}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">Register Now</CardTitle>
        <p className="text-gray-600">Secure your spot in the talent test</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      {...field} 
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-transparent">
                          <SelectValue placeholder="Select Class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="9th">Class 9</SelectItem>
                        <SelectItem value="10th">Class 10</SelectItem>
                        <SelectItem value="11th">Class 11</SelectItem>
                        <SelectItem value="12th">Class 12</SelectItem>
                        <SelectItem value="Dropper">Dropper</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter 10-digit phone number" 
                        {...field} 
                        className="focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email ID</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      {...field} 
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your school name" 
                      {...field} 
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              You'll receive test details and center location on your phone/email.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
