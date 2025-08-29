import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Flavor
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Fusion</span>
            <br />
            Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the ultimate crispy experience with Lays. From classic original to bold new flavors, 
            taste the difference in every irresistible bite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="hero-button text-lg px-10 py-6">
              Explore Flavors
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Watch Story
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Flavors</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-secondary">1M+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-muted-foreground">Natural Potatoes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;