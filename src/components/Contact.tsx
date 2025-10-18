import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or need assistance? Our team is here to help you succeed in your agricultural journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact info cards will be added here */}
          <Card className="text-center border-border hover:shadow-lg transition-all duration-300 bg-card">
            <CardHeader>
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4" />
              <CardTitle className="text-lg text-card-foreground">Contact Type</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">Contact details</CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
