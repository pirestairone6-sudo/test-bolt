import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Sparkles } from 'lucide-react';

const ProductPreviewSection = () => {
  const products = [
    {
      title: "Adaptive Bodysuits",
      description: "Easy tube access with soft seams and hypoallergenic fabrics",
      features: ["G-tube friendly", "Snap closures", "Hypoallergenic", "Soft cotton blend"],
      icon: Heart,
    },
    {
      title: "Friendly Sleepwear",
      description: "Comfort-first design for peaceful nights and medical needs",
      features: ["Trach-friendly necklines", "Monitor cord access", "Gentle fabrics", "Easy diaper changes"],
      icon: Shield,
    },
    {
      title: "Sensory-Friendly Outfits",
      description: "Thoughtfully designed for sensitive skin and sensory needs",
      features: ["Relaxed Fit", "Stretchy waistband", "Soft textures", "No zippers"],
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 hero-text">
            Product Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Thoughtfully designed adaptive clothing for infants aged 0–24 months
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="luxury-card hover:shadow-elegant transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              High-fidelity mockups coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;