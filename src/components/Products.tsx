import { ShoppingCart, Package, Truck, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: Package,
    title: "Quality Assured",
    description: "All products verified by experts",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and trusted transactions",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Marketplace
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse and purchase agricultural products, equipment, and services from verified sellers across Busia County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Product category cards will be added here */}
          <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group bg-card">
            <div className="h-48 bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                0 items
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Category Name</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Browse
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 bg-card rounded-2xl p-8 border border-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
