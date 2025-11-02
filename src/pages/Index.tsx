import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import DemoBooking from "@/components/DemoBooking";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <DemoBooking />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
