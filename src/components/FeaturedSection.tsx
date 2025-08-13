import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Cashmere Dreams Onesie",
      price: "£285",
      originalPrice: "£340",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=500&fit=crop",
      rating: 5,
      isNew: true,
      colors: ["Rose", "Ivory", "Sage"]
    },
    {
      id: 2,
      name: "Silk Slumber Set",
      price: "£420",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop",
      rating: 5,
      isBestseller: true,
      colors: ["Blush", "Pearl", "Lavender"]
    },
    {
      id: 3,
      name: "Organic Cotton Romper",
      price: "£165",
      image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=500&fit=crop",
      rating: 4.8,
      isEcoFriendly: true,
      colors: ["Natural", "Dusty Rose", "Sage"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="hero-text">Featured Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Discover our most beloved pieces, each crafted with exceptional attention to detail 
            and the finest materials for your little one's comfort.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} 
                  className="luxury-card group hover:scale-105 transition-all duration-500 overflow-hidden elegant-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                {/* Product Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Bestseller
                    </span>
                  )}
                  {product.isEcoFriendly && (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Eco-Friendly
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-4 right-4 z-10 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Product Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full btn-luxury">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-primary fill-current' 
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.rating})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Colors:</span>
                  {product.colors.map((color, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {color}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xl text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border/50 hover:bg-card/50 backdrop-blur-sm">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;