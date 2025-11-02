import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  console.log("Hero component rendering"); // Debug log

  return (
    <motion.section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent pt-20">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </motion.div>

      <motion.div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Boost Student Success with{" "}
            </motion.span>
            <motion.span 
              className="text-accent-light inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, color: "#fff" }}
            >
              Year-Round Exams
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            The Ultimate Solution for Information Technology at the Junior College Level
          </motion.p>

          {/* Key Points */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              "Std. XI & XII",
              "Board Aligned",
              "258+ Colleges"
            ].map((text, index) => (
              <motion.div
                key={text}
                className="flex items-center gap-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </motion.div>
                <span className="text-primary-foreground font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                onClick={scrollToDemo}
                className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-accent text-lg px-8 py-6 rounded-full group"
              >
                <motion.span className="flex items-center">
                  Schedule Live Demo
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Bottom Wave */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 20
        }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 160"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,106.7C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
