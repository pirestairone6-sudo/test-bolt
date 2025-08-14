import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {


  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Footer Content */}
        <div className="flex justify-center mb-12">
          {/* Brand */}
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl font-display font-bold hero-text">
                Cutekiddo
              </span>
            </div>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              Thoughtfully designed inclusive clothing that brings comfort, confidence, and joy to children with medical needs and their families. Made with love in Canada.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/cutekiddo_ca/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573646977130" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/Cutekiddo_ca" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/channel/UC-zSidV6JrIQSQYOEfTwqPA" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
            </div>
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
