import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Sunrise SoftTech
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the digital transformation of educational assessments in Maharashtra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-soft text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower educational institutions with cutting-edge technology that simplifies examination processes and enhances student learning outcomes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark mb-6">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted examination software provider in India, setting new standards for digital assessment solutions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence, innovation, integrity, and unwavering commitment to customer satisfaction drive everything we do.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-medium animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="font-bold text-primary">Sunrise SoftTech</span> has been at the forefront of educational technology innovation for over 5 years. We specialize in developing comprehensive examination software solutions specifically designed for junior colleges offering Information Technology courses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our flagship IT-Exam Software is the result of extensive research, collaboration with educational experts, and feedback from hundreds of institutions across Maharashtra. We understand the unique challenges faced by junior colleges in conducting IT examinations and have designed our solution to address every aspect of the examination lifecycle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a proven track record of serving <span className="font-bold text-accent">258+ colleges</span> and impacting the lives of thousands of students, we continue to innovate and improve our offerings. Our dedicated support team ensures that every institution receives personalized assistance, making the transition to digital examinations smooth and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
