import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import classicChips from '@/assets/classic-chips.jpg';
import spicyChips from '@/assets/spicy-chips.jpg';
import blueChips from '@/assets/blue-chips.jpg';

const products = [
  {
    id: 1,
    name: "Classic Original",
    description: "The timeless taste that started it all. Perfectly salted, perfectly crispy.",
    image: classicChips,
    color: "primary",
    gradient: "bg-gradient-primary"
  },
  {
    id: 2,
    name: "Spicy Fire",
    description: "Feel the heat with our boldest flavor. Not for the faint-hearted.",
    image: spicyChips,
    color: "secondary",
    gradient: "bg-gradient-secondary"
  },
  {
    id: 3,
    name: "Cool Ranch",
    description: "Cool and creamy with a hint of herbs. Refreshingly delicious.",
    image: blueChips,
    color: "accent",
    gradient: "bg-gradient-accent"
  }
];

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-secondary">Signature</span> Flavors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each flavor tells a story. Each bite creates a memory. 
            Discover your next favorite in our carefully crafted collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`product-card cursor-pointer transition-all duration-500 ${
                activeProduct === index ? 'scale-105 shadow-strong' : 'hover:scale-102'
              }`}
              onClick={() => setActiveProduct(index)}
            >
              <CardContent className="p-0">
                <div className={`${product.gradient} p-6 text-center relative overflow-hidden`}>
                  <div className="relative z-10">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-32 h-32 mx-auto mb-4 object-contain animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-white/90 mb-4">{product.description}</p>
                    <Button 
                      variant="outline" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300"
                    >
                      Try This Flavor
                    </Button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Product Detail */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft animate-scale-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Featured: {products[activeProduct].name}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {products[activeProduct].description} Made with the finest potatoes and crafted 
                with passion, this flavor represents everything we stand for at Lays.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">100% Natural Potatoes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Zero Trans Fat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">Gluten Free</span>
                </div>
              </div>
              <Button className="hero-button">
                Order Now
              </Button>
            </div>
            <div className="text-center">
              <img 
                src={products[activeProduct].image} 
                alt={products[activeProduct].name}
                className="w-64 h-64 mx-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;