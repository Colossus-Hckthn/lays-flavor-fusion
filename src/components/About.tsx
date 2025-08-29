import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Award, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only the finest potatoes and natural seasonings for authentic taste.",
    color: "text-success"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Award-winning recipes perfected over decades of culinary expertise.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every chip is crafted with passion and care for your enjoyment.",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Bold Flavors",
    description: "Innovative taste combinations that excite your palate.",
    color: "text-accent"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Lays</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For generations, we've been perfecting the art of creating the perfect potato chip. 
            Our commitment to quality and innovation has made us a beloved brand worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="product-card border-none shadow-soft bg-card/50">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ${feature.color}`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Our Impact in Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">75+</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-primary-foreground/80">Countries Worldwide</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
              <div className="text-primary-foreground/80">Daily Servings</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;