import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Gift, Handshake, Phone, Mail, ArrowRight } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Join Our Mission of Love
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Be part of something beautiful. Help us continue her legacy of 
              compassion and touch more lives with your support.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are many meaningful ways to support our mission. 
              Every contribution, no matter how small, makes a lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Donate */}
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Make a Donation
                </CardTitle>
                <p className="text-muted-foreground">
                  Your donation becomes a source of continuous charity in her memory
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Donation Options:</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                      <span>Emergency Relief Fund</span>
                      <Button size="sm" variant="outline">₹ Any Amount</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                      <span>Education Support</span>
                      <Button size="sm" variant="outline">₹ Any Amount</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                      <span>Healthcare Access</span>
                      <Button size="sm" variant="outline">₹ Any Amount</Button>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="w-full">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Even ₹1 makes a difference and becomes continuous charity in her name
                </p>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-100">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Become a Volunteer
                </CardTitle>
                <p className="text-muted-foreground">
                  Share your time, skills, and compassion with those who need it most
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Volunteer Opportunities:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>Field assistance during relief operations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Gift className="w-4 h-4 text-secondary" />
                      <span>Help organize donation drives</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Handshake className="w-4 h-4 text-secondary" />
                      <span>Community outreach programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-secondary" />
                      <span>Counseling and emotional support</span>
                    </li>
                  </ul>
                </div>
                <Button size="lg" variant="default" className="w-full">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Volunteer
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Flexible schedules available • Remote and on-site opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Involvement */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions about how to get involved? Want to discuss a specific way 
              to contribute? We'd love to hear from you.
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="p-4 md:p-6 shadow-soft">
                <CardContent className="text-center space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm md:text-base">Call Us</h3>
                  <p className="text-muted-foreground text-sm md:text-base">+92-300-123-4567</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Available Mon-Thu & Sat, 9 AM - 5 PM
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 md:p-6 shadow-soft">
                <CardContent className="text-center space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm md:text-base">Email Us</h3>
                  <p className="text-muted-foreground text-sm md:text-base">info@rwhelpinghands.pk</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" variant="default" className="px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Start Making a Difference Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact of Contributions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Your Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your contributions create ripples of kindness and hope
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <Card className="p-4 md:p-6 shadow-soft animate-fade-in">
              <CardContent className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-secondary">Rs. 200</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Can provide a food package for a Pakistani family of 4
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6 shadow-soft animate-fade-in animate-delay-100">
              <CardContent className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">Rs. 1,000</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Can cover school fees for one child for a month
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6 shadow-soft animate-fade-in animate-delay-200">
              <CardContent className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-secondary">Rs. 2,000</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Can provide emergency medical assistance
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6 shadow-soft animate-fade-in animate-delay-300">
              <CardContent className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">Rs. 10,000</div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Can help rehabilitate an entire family
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12 animate-fade-in px-4">
            <p className="text-base md:text-lg text-muted-foreground italic">
              "Remember, even Rs. 1 donated in her memory becomes a source of continuous charity. 
              Every contribution, no matter the size, continues her legacy of love across Pakistan."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;