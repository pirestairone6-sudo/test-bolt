import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-baby.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury baby fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Text Background Enhancement */}
            <div className="relative">
              <div className="absolute inset-0 bg-background/25 backdrop-blur-sm rounded-3xl transform -rotate-1 opacity-60"></div>
              <div className="relative px-8 py-12 lg:px-16 lg:py-20">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full mb-12 luxury-card elegant-fade-in">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Pre-Launch - Coming Soon
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-12 elegant-fade-in">
                  <span className="hero-text block leading-tight mb-2">Designed to fit</span>
                  <span className="hero-text block leading-tight mb-2">Every Journey,</span>
                  <span className="hero-text block leading-tight">Big and Small.</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-16 elegant-fade-in text-primary leading-tight">
                  We're here to prove that.
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto elegant-fade-in font-light leading-relaxed">
                  Cutekiddo creates baby clothing that blends comfort, function, and dignity — 
                  so dressing your child becomes one less thing to worry about.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center elegant-fade-in mb-20">
                  <Button className="btn-luxury group" onClick={() => window.location.href = '#join-movement'}>
                    Join the Movement
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="elegant-fade-in">
                  <p className="text-sm text-muted-foreground mb-6 font-medium tracking-wide">
                    DESIGNED IN CANADA
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 opacity-70">
                    <div className="text-xs font-medium tracking-widest">ADAPTIVE</div>
                    <div className="text-xs font-medium tracking-widest">INCLUSIVE</div>
                    <div className="text-xs font-medium tracking-widest">MEDICAL-SAFE</div>
                    <div className="text-xs font-medium tracking-widest">0-24 MONTHS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 float-animation">
        <div className="w-3 h-3 bg-primary rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 float-animation" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-primary-glow rounded-full opacity-80"></div>
      </div>
      <div className="absolute top-1/2 right-1/6 float-animation" style={{ animationDelay: '4s' }}>
        <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-70"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
