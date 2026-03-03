import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualPathCards from "@/components/DualPathCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <Hero />
        <DualPathCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
