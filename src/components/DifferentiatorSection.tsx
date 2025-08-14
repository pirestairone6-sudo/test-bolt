import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shirt, Ruler, Award } from 'lucide-react';

const DifferentiatorSection = () => {
  const differentiators = [
    {
      icon: Users,
      title: "Designed in collaboration",
      description: "Created with parents and nurses who understand real-world needs",
    },
    {
      icon: Shirt,
      title: "Comfort-focused fabrics",
      description: "Medical-safe, hypoallergenic materials that prioritize sensitive skin",
    },
    {
      icon: Ruler,
      title: "Inclusive sizing",
      description: "Thoughtfully designed for all bodies from 0 to 24 months",
    },
    {
      icon: Award,
      title: "Dignity-first aesthetic",
      description: "Beautiful, not clinical — every child deserves to feel special",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 hero-text">
            What Makes Us Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            More than clothing — it's care made visible
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="luxury-card hover:shadow-elegant transition-all duration-500 group text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
