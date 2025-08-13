import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' }
  ];

  const customerCare = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Track Your Order', href: '/track' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="luxury-card p-8 rounded-3xl mb-16 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            <span className="hero-text">Stay in Touch</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips for your little one.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="rounded-l-full border-r-0 focus:ring-0"
            />
            <Button className="rounded-r-full px-8">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-display font-bold hero-text">
                Cutekiddo
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md font-light leading-relaxed">
              Thoughtfully designed inclusive clothing that brings comfort, confidence, and joy to children with medical needs and their families. Made with love in Canada.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-display font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-3">
              {customerCare.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Cutekiddo Inc. All rights reserved.</span>
            <span>•</span>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>in Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;