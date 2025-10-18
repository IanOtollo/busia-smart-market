import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueChains from "@/components/ValueChains";
import Partners from "@/components/Partners";
import Subsidies from "@/components/Subsidies";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ValueChains />
      <Partners />
      <Subsidies />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
