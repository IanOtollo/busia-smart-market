import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const ValueChains = () => {
  return (
    <section id="value-chains" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Agricultural Value Chains
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the diverse agricultural value chains in Busia County and connect with stakeholders across the supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value chain cards will be added here */}
          <Card className="border-border hover:shadow-lg transition-all duration-300 group bg-card">
            <CardHeader>
              <div className="h-16 w-16 rounded-xl bg-muted mb-4" />
              <CardTitle className="text-xl text-card-foreground">Value Chain</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                  Item
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueChains;
