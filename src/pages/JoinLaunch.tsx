import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Facebook, MessageCircle, Youtube, Music, Twitter, Image } from 'lucide-react';

const JoinLaunch = () => {
  const socialMediaLinks = [
    { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500', href: 'https://www.instagram.com/cutekiddo_ca/' },
    { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-600', href: 'https://www.facebook.com/profile.php?id=61573646977130' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'hover:text-green-500', href: '#' },
    { name: 'YouTube', icon: Youtube, color: 'hover:text-red-500', href: 'https://www.youtube.com/@Cutekiddo_ca' },
    { name: 'TikTok', icon: Music, color: 'hover:text-black', href: 'https://tiktok.com/@cutekiddo_ca' },
    { name: 'X (Twitter)', icon: Twitter, color: 'hover:text-blue-400', href: 'https://x.com/Cutekiddo_ca' },
    { name: 'Pinterest', icon: Image, color: 'hover:text-red-600', href: 'https://www.pinterest.com/Cutekiddo_ca' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="hero-text">Join the Launch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of something beautiful. Follow our journey and be the first to know when our adaptive clothing collection becomes available.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Info Card */}
        <div className="mb-12">
          <Card className="luxury-card group hover:scale-105 transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-center">
                More Than Clothes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A portion of our proceeds supports families of medically complex children — because no one should feel alone on their journey. When you choose Cutekiddo, you're not just buying clothes; you're joining a community that believes every child deserves comfort, dignity, and beautiful clothing that works for their unique needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Buttons */}
        <Card className="luxury-card mb-12">
          <CardContent className="p-8">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">
              Follow Our Journey
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Stay connected with us across all platforms for behind-the-scenes content, product updates, and community stories.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {socialMediaLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex flex-col items-center justify-center p-4 h-auto space-y-2 ${social.color} transition-all duration-200 group-hover:scale-105`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </Button>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Send Us a Message */}
        <Card className="luxury-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-center">
              Send Us a Message
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Have questions about our launch? Want to share your story? We'd love to hear from you!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input placeholder="How can we help you?" />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea 
                placeholder="Tell us more about your question or share your story with us..."
                className="min-h-[120px]"
              />
            </div>
            
            <Button className="w-full btn-luxury">
              Send Message
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              We'll get back to you within 24 hours. Your privacy is important to us.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default JoinLaunch;