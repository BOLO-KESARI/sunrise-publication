import { Award, TrendingUp, Clock, Heart } from "lucide-react";

const Benefits = () => {
  const stats = [
    {
      icon: Award,
      number: "260+",
      label: "Trusted Colleges",
      description: "Across Maharashtra",
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Success Rate",
      description: "Digital transformation",
    },
    {
      icon: Clock,
      number: "80%",
      label: "Time Saved",
      description: "In exam processing",
    },
    {
      icon: Heart,
      number: "24/7",
      label: "Support",
      description: "Expert assistance",
    },
  ];

  const benefits = [
    "Eliminate manual paper checking and reduce workload by 80%",
    "Instant result declaration with detailed analytics",
    "Reduce examination costs and paper usage",
    "Maintain complete transparency with digital records",
    "Scale effortlessly from small to large institutions",
    "Get dedicated support and regular updates",
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Choose Sunrise SoftTech?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your examination process with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-card-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft text-center hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="relative text-3xl md:text-4xl font-extrabold mb-2 inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block transition-transform duration-500 ease-out transform hover:-translate-y-1 hover:scale-105">
                    {stat.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute z-0 left-1/2 top-1/2 w-28 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md opacity-30 bg-gradient-to-r from-primary/60 to-accent/60 animate-pulse"
                  />
                </div>
                <div className="font-semibold text-card-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
