import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Heart } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Have questions about our work? Need assistance? Want to get involved? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us through any of the following methods. 
                  We're committed to responding promptly and with care.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 shadow-soft">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Our Address</h3>
                      <p className="text-muted-foreground">
                        RW Helping Hands Office<br />
                        [Complete Address]<br />
                        City, State - PIN Code<br />
                        India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mt-1">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Primary: +91 XXXX XXXXXX<br />
                        Emergency: +91 XXXX XXXXXX<br />
                        WhatsApp: +91 XXXX XXXXXX
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Email Addresses</h3>
                      <p className="text-muted-foreground">
                        General: info@rwhelpinghands.org<br />
                        Donations: donations@rwhelpinghands.org<br />
                        Volunteer: volunteer@rwhelpinghands.org
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-soft">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mt-1">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Emergency calls only<br />
                        <span className="text-xs italic mt-2 block">
                          Emergency assistance available 24/7
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in animate-delay-200">
              <Card className="p-8 shadow-soft">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-primary mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-primary mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Subject *
                      </label>
                      <Input placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Please share your message, questions, or how you'd like to get involved..."
                        rows={6}
                      />
                    </div>

                    <div className="space-y-4">
                      <Button size="lg" variant="default" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy. 
                        We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              If you or someone you know is facing an emergency and needs immediate assistance, 
              please don't hesitate to reach out. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline: +91 XXXX XXXXXX
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Quick Email: emergency@rwhelpinghands.org
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Promise to You
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Just as she was always there for those in need, we promise to be here for you. 
              Every message, call, or visit is treated with the same compassion and care 
              that she would have shown.
            </p>
            <p className="text-lg text-primary-foreground/80 italic">
              "No act of kindness is too small, and no one should face their struggles alone."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;