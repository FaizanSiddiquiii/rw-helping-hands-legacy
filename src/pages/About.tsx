import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Our Story of Love & Legacy
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Born from the beautiful memory of an angel who walked among us, 
              RW Helping Hands carries forward a mission of unconditional love.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                In Loving Memory
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 animate-fade-in animate-delay-200">
              <p className="text-lg leading-relaxed">
                This story, and the mission it represents, is born from a heart that understood the true meaning of compassion—my beloved late sister. While she was with us, she was a source of light and warmth for everyone she met. She had a kindness that knew no bounds, a generous spirit that never tired of giving, and a deep love for every human being.
              </p>
              
              <p className="text-lg leading-relaxed">
                No matter who you were or what your situation, if you were in need, she was there. She gave freely, with no expectation of anything in return, and her presence was a comfort to countless souls.
              </p>
              
              <p className="text-lg leading-relaxed">
                Now, she is no longer with us, and the world feels a little less bright. But her legacy, her spirit of unconditional love and kindness, lives on. My friends and I, inspired by her unwavering commitment to helping others, came together with a single, powerful idea: to continue her beautiful work.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold text-primary">
                This is how RW Helping Hands was born.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our NGO is a tribute to her life and her love. It is a promise to all those in need that her compassion will never cease. We are here to provide assistance, comfort, and support to the most vulnerable members of our community, just as she always did. We believe that no act of kindness is too small, and every single contribution can make a profound difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Meet Our Founder
            </h2>
            
            <Card className="p-8 shadow-soft">
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Shajeer Waqar</h3>
                  <p className="text-muted-foreground">Founder & Director</p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Driven by the memory of his beloved sister and her unwavering commitment to helping others, 
                  Shajeer founded RW Helping Hands to ensure that her spirit of compassion continues to touch 
                  lives and bring hope to those who need it most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To continue the legacy of compassion and kindness by providing support, 
                  assistance, and hope to the most vulnerable members of our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-100">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where no one suffers alone, where every act of kindness creates 
                  ripples of hope, and where her spirit of love continues to shine.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-all animate-fade-in animate-delay-200">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-hope/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-hope" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unconditional love, selfless service, dignity for all, and the belief 
                  that every person deserves compassion and support in their time of need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;