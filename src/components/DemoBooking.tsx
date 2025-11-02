import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Send } from "lucide-react";

const DemoBooking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.college || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Demo Request Received! 🎉",
      description: "We'll contact you within 24 hours to schedule your live demo.",
    });

    // Reset form
    setFormData({
      name: "",
      college: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="demo" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark mb-6">
              <Calendar className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Schedule Your Live Demo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our software can transform your examination process
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 rounded-3xl shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="college" className="block text-sm font-semibold mb-2 text-foreground">
                    College Name *
                  </label>
                  <Input
                    id="college"
                    name="college"
                    type="text"
                    placeholder="Enter college name"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any specific requirements or questions?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-card border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-primary-foreground shadow-medium text-lg py-6 transition-transform hover:scale-[1.02]"
              >
                Request Demo
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
