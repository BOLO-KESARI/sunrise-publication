import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 7038497447", "+91 9420137381", "+91 9096364987"],
      link: "tel:+917038497447",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@sunrisesofttech.com", "support@sunrisesofttech.com"],
      link: "mailto:info@sunrisesofttech.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Maharashtra", "India"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      {item.link && (
                        <a
                          href={item.link}
                          className="inline-block mt-2 text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                          Contact Now →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-br from-primary to-accent p-12 rounded-3xl shadow-strong animate-fade-in">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Examination Process?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join 258+ colleges already using Sunrise SoftTech to deliver better examination experiences
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("demo");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-accent text-lg px-10 py-6 rounded-full transition-transform hover:scale-105"
            >
              Schedule Your Demo Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
