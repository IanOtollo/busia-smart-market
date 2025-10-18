import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive agricultural services designed to empower farmers and strengthen the agricultural ecosystem in Busia County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service cards will be added here */}
          <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted mb-4" />
              <CardTitle className="text-xl text-card-foreground">Service Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Service description will go here
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
