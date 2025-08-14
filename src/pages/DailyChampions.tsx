import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Star, ArrowRight, Moon, Sun } from 'lucide-react';

const DailyChampions = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Fullscreen Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&h=1080&fit=crop"
            alt="Gentle moment with adaptive baby clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 text-white animate-fade-in">
              <span className="block opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">For the Moments They're Awake.</span>
              <span className="block opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">For the Dreams That Shape Them.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_2.5s_forwards]">
              Bodysuits and sleepwear engineered for comfort, crafted for resilience, and styled for the everyday heroes we love most.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[fade-in_1s_ease-out_3.5s_forwards]">
              <Button 
                size="lg" 
                className="btn-luxury text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
                onClick={() => section1Ref.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sun className="mr-2 h-5 w-5" />
                Discover Their Daily Armor
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => section2Ref.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Moon className="mr-2 h-5 w-5" />
                Enter Their Dreamland
              </Button>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Section 1 - Daily Champions */}
      <section ref={section1Ref} className="py-32 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 hero-text">
              Daily Champions
            </h2>
            <p className="text-2xl text-primary font-medium mb-8 tracking-wide">
              Clothing That Works as Hard as They Do
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  They face the world with curiosity and courage.<br />
                  Our Daily Champions bodysuits are built for the little victories —<br />
                  every roll, every stretch, every moment of discovery.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="luxury-card border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Adaptive Ease</h3>
                        <p className="text-muted-foreground">Discreet openings for medical devices and faster changes.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Cloud-Soft Cotton & Premium Blends</h3>
                        <p className="text-muted-foreground">Breathable and gentle for sensitive skin.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">Effortless Mobility</h3>
                        <p className="text-muted-foreground">Tailored stretch zones for natural movement.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl text-center">
                <p className="text-2xl font-display font-semibold text-primary mb-2">
                  Comfort you see.
                </p>
                <p className="text-xl text-muted-foreground">
                  Freedom they feel.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=1000&fit=crop"
                alt="Baby in adaptive bodysuit during daily activities"
                className="w-full h-[600px] object-cover rounded-3xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Dreamland Comforts */}
      <section ref={section2Ref} className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Constellation Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white">
              Dreamland Comforts
            </h2>
            <p className="text-2xl text-blue-200 font-medium mb-8 tracking-wide">
              Where Every Thread Whispers Goodnight
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&h=1000&fit=crop"
                alt="Peaceful baby sleeping in comfortable sleepwear"
                className="w-full h-[600px] object-cover rounded-3xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent rounded-3xl"></div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  The night belongs to their dreams — and your peace of mind.<br />
                  Every Dreamland Comforts piece is a promise:<br />
                  no irritations, no temperature swings, just undisturbed rest.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Moon className="h-6 w-6 text-blue-200" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2 text-white">Temperature-Regulating Weave</h3>
                        <p className="text-blue-100">Cozy in winter, breathable in summer.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-purple-200" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2 text-white">Zero-Irritation Finish</h3>
                        <p className="text-blue-100">Smooth seams and tags they'll never feel.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="h-6 w-6 text-indigo-200" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2 text-white">Dream-Ready Fit</h3>
                        <p className="text-blue-100">Keeps shape while letting them curl, stretch, and grow.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-8 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                <p className="text-xl text-blue-100 mb-4 italic">
                  Because tomorrow's adventures start with tonight's rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Cutekiddo Edge */}
      <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop"
                alt="Luxury fabric texture"
                className="w-full h-32 object-cover rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-primary bg-white/90 px-8 py-3 rounded-full shadow-elegant">
                  Cutekiddo
                </span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-8 hero-text">
              The Cutekiddo Edge
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">This is not just clothing.</p>
              <p className="leading-relaxed">It's protection. It's comfort.</p>
              <p className="leading-relaxed font-semibold text-primary text-2xl">
                It's a piece of love they can wear, all day and all night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-8 hero-text">
              For every adventure. For every dream.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop"
                  alt="Daily Champions morning scene"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Daily Champions</h3>
                  <p className="text-white/90">Ready for every adventure</p>
                </div>
              </div>
            </Card>

            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&h=600&fit=crop"
                  alt="Dreamland Comforts night scene"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Dreamland Comforts</h3>
                  <p className="text-white/90">Perfect for peaceful dreams</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="btn-luxury text-lg px-12 py-4">
              Shop the Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DailyChampions;
