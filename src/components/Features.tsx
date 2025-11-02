import { CheckCircle2, FileText, Users, Zap, Shield, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "100% Board Aligned",
      description: "Perfectly aligned with Board's online exam pattern for Information Technology",
    },
    {
      icon: FileText,
      title: "Updated Question Bank",
      description: "Comprehensive question bank for Std. XI & XII across Arts, Commerce, and Science streams",
    },
    {
      icon: Zap,
      title: "Smart Paper Generation",
      description: "Automated generation for Unit Tests, Terminal Exams, and Model Exams with customizable parameters",
    },
    {
      icon: TrendingUp,
      title: "Instant Results",
      description: "Automated evaluation with instant result generation and built-in cross-checking system",
    },
    {
      icon: Users,
      title: "Unlimited Access",
      description: "Centralized client-server architecture supporting unlimited users and computers",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data backup and recovery options",
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to conduct seamless IT examinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-light w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-soft">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
