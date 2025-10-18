import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">Busia Smart Market</span>
              <span className="text-xs text-muted-foreground">Your Gateway to Agriculture</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#value-chains" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Value Chains
          </a>
          <a href="#partners" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Partners
          </a>
          <a href="#subsidies" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Subsidies
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9 w-[200px]"
              />
            </div>
          </div>
          <Button variant="default" size="sm">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
