import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Leaf, Heart, Shield, Users, Clock } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2024', event: "Leonidas' Birth", description: 'Born with medical challenges that sparked our journey' },
    { year: '2024', event: 'Realizing the Gap', description: 'Discovered the lack of adaptive babywear in the market' },
    { year: '2025', event: 'Cutekiddo Founded', description: 'Officially launched Cutekiddo to fill this critical need' },
    { year: '2025', event: 'First Adaptive Collection', description: 'Designed our inaugural collection of adaptive babywear' },
    { year: '2025', event: 'Pre-Launch Community', description: 'Growing community and first public reveal coming soon!' },
  ];

  const team = [
    {
      name: 'Isabella Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop',
      bio: 'Former Burberry designer with 15 years in luxury fashion'
    },
    {
      name: 'Marcus Thompson',
      role: 'Sustainability Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Environmental expert ensuring our eco-friendly practices'
    },
    {
      name: 'Sophie Laurent',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Parisian designer specializing in baby comfort and safety'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="hero-text">Our Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Cutekiddo exists to redefine baby clothing for all children, including those with 
              medical needs, by merging comfort, functionality, safety, and style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-card p-8 rounded-3xl">
              <h2 className="text-3xl font-display font-bold mb-6 hero-text">
                Crafting Tomorrow's Legacy
              </h2>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                We envision a future where adaptive and inclusive babywear is the global 
                standard — where every parent can find clothes that work for their child without compromise.
              </p>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Our designs merge beauty and practicality, giving families the freedom to focus 
                on what matters most: cherishing every moment.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                When you join Cutekiddo, you become part of a legacy that celebrates resilience, 
                embraces diversity, and uplifts every child's story.
              </p>
            </div>
            
            <div className="aspect-[4/3] overflow-hidden rounded-3xl luxury-card">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                alt="Baby wearing adaptive clothing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="hero-text">Our Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is guided by our core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Love & Care",
                description: "Every piece is designed with unconditional love for your little one's comfort and happiness."
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "We're committed to protecting the planet our children will inherit through eco-friendly practices."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We never compromise on quality, ensuring every garment meets the highest standards."
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "All our products undergo rigorous testing to ensure complete safety for your baby."
              },
              {
                icon: Users,
                title: "Community",
                description: "A supportive space where parents share experiences, find understanding, and never feel alone in their journey."
              },
              {
                icon: Clock,
                title: "Every Moment Matters",
                description: "Celebrating the beauty of every milestone, no matter how small."
              }
            ].map((value, index) => (
              <Card key={index} className="luxury-card group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="hero-text">Our Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The inspiring journey that led to creating adaptive babywear for all children
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 group">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-display font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                <Card className="flex-1 luxury-card group-hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay in Touch Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            <span className="hero-text">Stay in Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know about our upcoming launch and join our community of families 
            who believe every child deserves clothing that works for them.
          </p>
          <Card className="luxury-card p-8">
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6">
                We're not just selling clothes — we're creating tools that make caregiving easier, 
                empower parents, and uplift families. Every baby deserves clothing that fits their body, 
                their needs, and their dignity — whether they're in a NICU or at home.
              </p>
              <p className="text-primary font-medium">
                Join the movement to change the standard in baby fashion.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
