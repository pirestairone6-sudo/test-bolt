import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, PlayCircle, Youtube } from 'lucide-react';

const SocialButton = ({ icon: Icon, label, href, countTarget }: { 
  icon: any; 
  label: string; 
  href: string; 
  countTarget: number; 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(countTarget / 100);
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= countTarget) {
          clearInterval(interval);
          return countTarget;
        }
        return Math.min(prev + increment + Math.floor(Math.random() * 3), countTarget);
      });
    }, 50 + Math.random() * 100);

    return () => clearInterval(interval);
  }, [countTarget]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <Button variant="ghost" size="sm" className="relative group-hover:bg-primary/10 transition-all duration-300">
        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {count >= 99 ? '99+' : count}
        </span>
      </Button>
    </a>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Our Mission', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Join the Launch', href: '/join-launch' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-card/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/9ea50f44-1ecf-403c-9a4f-8bc60e4e641a.png" 
              alt="Cutekiddo Logo"
              className="h-12 w-12"
            />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold hero-text tracking-tight">
                Cutekiddo
              </span>
              <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">
                Canada
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={`nav-highlight px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'text-primary font-semibold active' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialButton 
              icon={Instagram} 
              label="Instagram" 
              href="https://www.instagram.com/cutekiddo_ca/" 
              countTarget={10} 
            />
            <SocialButton 
              icon={PlayCircle} 
              label="TikTok" 
              href="https://tiktok.com/@cutekiddo_ca" 
              countTarget={8} 
            />
            <SocialButton 
              icon={Youtube} 
              label="YouTube" 
              href="https://www.youtube.com/channel/UC-zSidV6JrIQSQYOEfTwqPA" 
              countTarget={99} 
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-lg rounded-b-2xl shadow-lg border border-border/50">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50">
                <SocialButton 
                  icon={Instagram} 
                  label="Instagram" 
                  href="https://www.instagram.com/cutekiddo_ca/" 
                  countTarget={10} 
                />
                <SocialButton 
                  icon={PlayCircle} 
                  label="TikTok" 
                  href="https://tiktok.com/@cutekiddo_ca" 
                  countTarget={8} 
                />
                <SocialButton 
                  icon={Youtube} 
                  label="YouTube" 
                  href="https://www.youtube.com/channel/UC-zSidV6JrIQSQYOEfTwqPA" 
                  countTarget={99} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;