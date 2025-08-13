import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Sparkles, Baby, ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 'daily-champions',
      title: 'Daily Champions & Dreamland Comforts',
      subtitle: 'Bodysuits & Sleepwear',
      description: 'Clothes crafted for the everyday heroes who inspire us — featuring discreet G-tube openings, soft seams for sensitive skin, and easy dressing for caregivers. Because those precious moments should be about joy, not struggle.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      icon: Heart
    },
    {
      id: 'knitted-comforts',
      title: 'Knitted Comforts',
      subtitle: 'Milestone Moments',
      description: 'Because milestones matter. From first birthdays to hospital homecomings, this cozy, photogenic collection celebrates your baby\'s journey with comfort and style.',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop',
      icon: Sparkles
    },
    {
      id: 'elegance',
      title: 'Elegance',
      subtitle: 'Everyday Special',
      description: 'Every day is special in a baby\'s life — even quiet moments on the couch. Our refined pieces let your little one look and feel their best, wherever life takes you.',
      image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&h=600&fit=crop',
      icon: Baby
    },
    {
      id: 'hidden-heroes',
      title: 'Hidden Heroes',
      subtitle: 'Accessories',
      description: 'Unseen but always there — these carefully crafted accessories provide the support your baby needs every day. Soft, subtle, and designed to make life smoother for both little ones and their caregivers.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      icon: Shield
    }
  ];

  const features = [
    {
      title: 'Adaptive by Design',
      description: 'Hidden, thoughtful access points for medical devices without compromising style.',
      icon: Heart
    },
    {
      title: 'Luxury-Level Comfort',
      description: 'Premium fabrics handpicked for softness, breathability, and durability that cradle sensitive skin.',
      icon: Sparkles
    },
    {
      title: 'Inclusive Sizing',
      description: 'Every baby deserves perfect fit and comfort.',
      icon: Baby
    },
    {
      title: 'Timeless Style',
      description: 'Neutral tones and classic designs that photograph beautifully and stay relevant beyond fleeting trends.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[60vh] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 hero-text">
                  Clothes That Care
                  <br />
                  <span className="text-primary">As Much As You Do</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                  Where every gentle touch matters, and every moment becomes a celebration of love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Cutekiddo Different */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 hero-text">
              What Makes Cutekiddo Different?
            </h2>
          </div>
          
     
      </section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="luxury-card hover:shadow-elegant transition-all duration-500 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* Collections Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 hero-text">
            Our Core Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
            At Cutekiddo, our core collections unite everyday essentials with adaptive apparel designed to care for babies with and without medical needs.
          </p>
        </div>
        
      {/* Collections Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <Card key={collection.id} className="luxury-card group hover:shadow-elegant transition-all duration-500 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <collection.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4 uppercase tracking-wide">
                      {collection.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                  
                  <Button className="btn-luxury group w-full">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 hero-text">
              Designed in Canada. Loved Worldwide.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tested by parents of children with and without medical needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">Made with Love</h3>
              <p className="text-sm text-muted-foreground text-center">Every stitch tells a story of care and compassion</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">Safety First</h3>
              <p className="text-sm text-muted-foreground text-center">Rigorously tested to meet the highest safety standards</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground text-center">Luxury materials that stand the test of time</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
