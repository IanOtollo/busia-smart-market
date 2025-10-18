import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-muted">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">Welcome to Busia Smart Market</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Farmers,
              <span className="text-primary"> Growing Communities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Your comprehensive agricultural marketplace connecting farmers with markets, government support, 
              and value chain partners in Busia County.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Explore Market
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Market Information</h3>
                <p className="text-sm text-muted-foreground">Real-time prices and trends</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Government Support</h3>
                <p className="text-sm text-muted-foreground">Access subsidies and machinery</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Value Chains</h3>
                <p className="text-sm text-muted-foreground">Connect with processors</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Training & Advisory</h3>
                <p className="text-sm text-muted-foreground">Expert farming guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
