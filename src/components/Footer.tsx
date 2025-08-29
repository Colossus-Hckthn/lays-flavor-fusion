import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-background">Lays</span>
            </div>
            <p className="text-background/70 mb-6">
              Creating moments of joy with every crispy bite. 
              Taste the difference that quality makes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Classic Original</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Spicy Fire</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Cool Ranch</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">BBQ Smoke</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Sour Cream</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Store Locator</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Nutrition Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Allergen Info</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm mb-4 md:mb-0">
            © 2024 Lays. All rights reserved. Made with ❤️ for chip lovers worldwide.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;