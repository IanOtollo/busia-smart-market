import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Subsidies = () => {
  return (
    <section id="subsidies" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Government Subsidies & Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Take advantage of government support programs designed to make farming more affordable and productive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden h-[400px] bg-muted shadow-xl">
            <div className="h-full bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Modern Farm Equipment</h3>
                <p className="text-muted-foreground">Government-subsidized machinery for Busia farmers</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">How to Apply</h3>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">Register as a Farmer</h4>
                  <p className="text-sm text-muted-foreground">Complete your farmer registration with the Ministry of Agriculture</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">Fill out the subsidy application form with required documents</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">Await Approval</h4>
                  <p className="text-sm text-muted-foreground">Your application will be reviewed within 14 working days</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">Receive Support</h4>
                  <p className="text-sm text-muted-foreground">Get your subsidy voucher and access the support program</p>
                </div>
              </li>
            </ol>
            <Button size="lg" className="w-full md:w-auto">
              Apply for Subsidy
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Subsidy program cards will be added here */}
          <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted mb-4" />
              <CardTitle className="text-lg text-card-foreground">Program Title</CardTitle>
              <CardDescription className="text-muted-foreground">Program description</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Benefit item
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Subsidies;
