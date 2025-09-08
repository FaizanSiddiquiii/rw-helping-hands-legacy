import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Hand, Users, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Sacred Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RW Helping Hands was born from love, loss, and an unbreakable commitment to continue 
              the beautiful legacy of kindness left by our founder's beloved sister. Every act of 
              service we provide is a testament to her compassionate spirit that touched countless lives.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              How We Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Following her example of unconditional love, we reach out to the most 
              vulnerable members of our community with open hearts and helping hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Emergency Relief
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing immediate assistance to families facing crisis situations, 
                  ensuring no one suffers alone during their darkest moments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-200">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Hand className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Community Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building stronger communities through education, healthcare initiatives, 
                  and programs that uplift the most vulnerable among us.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Family Rehabilitation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Helping families rebuild their lives through comprehensive support, 
                  guidance, and the resources they need to thrive once again.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Be Part of Her Legacy
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Every donation, no matter how small, continues her beautiful work. 
              Even one rupee becomes a source of continuous charity in her memory, 
              creating ripples of kindness that will touch countless lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate in Her Memory
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Volunteer With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;