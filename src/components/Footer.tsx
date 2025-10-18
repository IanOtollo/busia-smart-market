import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-lg text-card-foreground">Busia Smart Market</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering farmers and strengthening agricultural value chains in Busia County.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-card-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#value-chains" className="text-sm text-muted-foreground hover:text-primary transition-colors">Value Chains</a></li>
              <li><a href="#partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-card-foreground">Support</h3>
            <ul className="space-y-2">
              <li><a href="#subsidies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Subsidies</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-card-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Busia County, Kenya</li>
              <li>+254 700 000 000</li>
              <li>info@busiasmartmarket.co.ke</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Busia Smart Market. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
