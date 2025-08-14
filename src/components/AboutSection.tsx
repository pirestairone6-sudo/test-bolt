import { Card, CardContent } from '@/components/ui/card';
import { Award, Leaf, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Every piece is meticulously designed with your baby's comfort and happiness in mind."
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We use only the finest organic and eco-friendly materials for a better tomorrow."
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Our collections have been recognized by international fashion and parenting awards."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All our products meet the highest safety standards and are tested by certified laboratories."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="elegant-fade-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="hero-text">About Petit Luxe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              Born from a passion for exquisite craftsmanship and a deep understanding of what 
              little ones need, Petit Luxe represents the pinnacle of luxury baby fashion. Our 
              talented team of designers, based in our London atelier, creates original, 
              trend-setting pieces that blend comfort with sophistication.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              Every garment tells a story of meticulous attention to detail, from the selection 
              of the finest organic fabrics to the hand-finished touches that make each piece 
              truly special.
            </p>
            <div className="flex items-center space-x-8 text-sm font-medium text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">15K+</div>
                <div>Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">50+</div>
                <div>Luxury Boutiques</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-primary mb-1">100%</div>
                <div>Organic Materials</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative elegant-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl luxury-card">
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=750&fit=crop"
                alt="Luxury baby fashion atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card luxury-card p-6 rounded-2xl">
              <div className="text-sm font-medium text-muted-foreground mb-1">Established</div>
              <div className="text-2xl font-display font-bold text-primary">2024</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} 
                  className="luxury-card text-center group hover:scale-105 transition-all duration-500 elegant-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <CardContent className="p-8">
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
  );
};

export default AboutSection;