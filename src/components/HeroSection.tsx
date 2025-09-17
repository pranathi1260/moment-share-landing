import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gradient-subtle to-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Share Your
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Moments Instantly
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with friends, share your story, and discover amazing content from people around the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4 h-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="clean" size="lg" className="text-lg px-8 py-4 h-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50M+</div>
                <div className="text-sm text-muted-foreground">Photos Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">App Store</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-20 scale-110"></div>
              <img 
                src={phoneMockup} 
                alt="Social media app interface showing posts and stories"
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;