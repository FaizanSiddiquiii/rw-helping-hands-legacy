import { Heart, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Continuing a Legacy of{" "}
            <span className="text-secondary animate-gentle-bounce inline-block">
              Compassion
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
            In loving memory of a beautiful soul, RW Helping Hands carries forward 
            her unwavering commitment to helping those in need, one act of kindness at a time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in animate-delay-300">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4 font-semibold shadow-medium hover:shadow-strong transition-all"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-fade-in animate-delay-300">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Lives Touched</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-primary-foreground/80">Families Helped</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-primary-foreground/80">Communities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;