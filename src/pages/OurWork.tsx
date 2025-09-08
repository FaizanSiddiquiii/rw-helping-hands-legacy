import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, GraduationCap, Stethoscope, ShoppingBag, ArrowRight } from "lucide-react";

const OurWork = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Our Work & Impact
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every program, every initiative, every helping hand extended is a reflection 
              of her boundless compassion for humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Following her example of unconditional love, we've developed comprehensive 
              programs to address the most pressing needs in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Emergency Relief
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Immediate assistance for families facing crisis situations, natural disasters, 
                  or unexpected hardships.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Food and shelter assistance</li>
                  <li>• Medical emergency support</li>
                  <li>• Crisis intervention services</li>
                  <li>• Temporary relief programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Education Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Ensuring children don't miss out on education due to financial constraints 
                  or family circumstances.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• School fee assistance</li>
                  <li>• Study materials and books</li>
                  <li>• Uniform and equipment support</li>
                  <li>• Tutoring programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-hope/20 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-hope" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Healthcare Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Bridging healthcare gaps for families who cannot afford medical treatment 
                  or medication.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Medical treatment funding</li>
                  <li>• Prescription medication support</li>
                  <li>• Health awareness programs</li>
                  <li>• Preventive care initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Family Rehabilitation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Comprehensive support to help families rebuild their lives and 
                  become self-sufficient.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Housing assistance</li>
                  <li>• Skill development programs</li>
                  <li>• Job placement support</li>
                  <li>• Counseling services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Community Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Building stronger, more resilient communities through collaborative 
                  programs and initiatives.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Community center programs</li>
                  <li>• Youth development initiatives</li>
                  <li>• Women empowerment programs</li>
                  <li>• Local capacity building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-hope/20 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-hope" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Essential Supplies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Providing basic necessities to families struggling to meet 
                  their daily needs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Food package distribution</li>
                  <li>• Clothing and blankets</li>
                  <li>• Hygiene kits</li>
                  <li>• Baby and child supplies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Impact So Far
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each number represents a life touched, a family helped, a moment of hope restored.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="space-y-2 animate-fade-in animate-delay-100">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">50+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Families Rehabilitated</div>
            </div>
            <div className="space-y-2 animate-fade-in animate-delay-200">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">25+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Emergency Cases</div>
            </div>
            <div className="space-y-2 animate-fade-in animate-delay-300">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Pakistani Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Help Us Expand Our Reach
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Your support allows us to reach more families, touch more lives, 
              and continue her legacy of unconditional love and kindness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 font-semibold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Support Our Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Become a Volunteer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;