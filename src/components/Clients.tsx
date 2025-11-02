import { Building2, Quote } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Principal, St. Xavier's Junior College",
      location: "Mumbai",
      text: "Sunrise SoftTech has revolutionized our IT examination process. The automated evaluation saves us countless hours and the results are incredibly accurate.",
    },
    {
      name: "Prof. Anjali Deshmukh",
      role: "HOD Information Technology",
      location: "Pune",
      text: "The question bank is comprehensive and perfectly aligned with the board syllabus. Our students have shown remarkable improvement in their performance.",
    },
    {
      name: "Mr. Sunil Patil",
      role: "IT Coordinator",
      location: "Nagpur",
      text: "Outstanding support and seamless implementation. The software is user-friendly and has made our examination process completely paperless.",
    },
  ];

  const collegeStats = [
    "258+ colleges trust our solution",
    "Across Maharashtra",
    "50,000+ students benefited",
    "5+ years of excellence",
  ];

  return (
    <section id="clients" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted by Leading Colleges
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of institutions transforming their examination process
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {collegeStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-card-foreground">{stat}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium mt-1">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
