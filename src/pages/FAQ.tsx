import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Instagram, Facebook, MessageCircle, Youtube, Music, Twitter, Image } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I choose the right size for my baby?",
      answer: "We recommend using our size guide based on your baby's height and weight rather than just age. Measuring before ordering ensures the best fit and comfort."
    },
    {
      question: "What materials are your clothes made from?",
      answer: "We use a carefully selected range of premium, baby-safe fabrics to ensure comfort, durability, and softness. Our materials include 100% cotton, organic cotton, cotton blends with spandex for stretch, polyester blends for durability, and eco-friendly bamboo blends combined with cotton and spandex. Each fabric is chosen to provide breathability, gentle care for sensitive skin, and flexibility for easy dressing."
    },
    {
      question: "Are Cutekiddo clothes safe for babies with medical needs?",
      answer: "Absolutely. Our adaptive designs meet strict safety, comfort, and accessibility standards—perfect for babies with medical devices or special care requirements."
    },
    {
      question: "How do the adaptive features work?",
      answer: "Our garments feature discreet openings, flexible fastenings, and stretchable panels to make dressing and medical care easier, without sacrificing style."
    },
    {
      question: "Are your fabrics and designs environmentally friendly?",
      answer: "Yes! Sustainability is core to what we do. We use responsibly sourced, biodegradable fabrics and minimal-waste production to protect our planet."
    },
    {
      question: "Will there be a specific size guide for adaptive clothing?",
      answer: "Yes, each adaptive piece will have detailed fit notes explaining how it works with feeding tubes, monitors, or other devices for hassle-free dressing."
    },
    {
      question: "When will shipping begin?",
      answer: "We're in pre-launch now. Shipping starts as soon as our first collection is ready. Newsletter subscribers get early access and exclusive updates."
    },
    {
      question: "Do you ship internationally?",
      answer: "Initially, we ship within Canada and the USA, with plans to expand internationally as we grow."
    },
    {
      question: "How can I get early access to your collection?",
      answer: "Sign up for our newsletter to receive exclusive previews, priority ordering, and launch news."
    },
    {
      question: "What makes Cutekiddo different from other babywear brands?",
      answer: "We blend adaptive functionality with luxurious, sustainable fabrics and timeless style—so every baby can be dressed comfortably, confidently, and beautifully, no matter their needs."
    }
  ];

  const socialMediaLinks = [
    { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'hover:text-green-500' },
    { name: 'YouTube', icon: Youtube, color: 'hover:text-red-500' },
    { name: 'TikTok', icon: Music, color: 'hover:text-black' },
    { name: 'X (Twitter)', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Pinterest', icon: Image, color: 'hover:text-red-600' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="hero-text">Frequently Asked Questions</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Info Squares */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="luxury-card group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-display text-center">
                Our Promise to You
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Every garment is designed with comfort, safety, and dignity in mind — because your baby deserves the very best from day one.
              </p>
            </CardContent>
          </Card>

          <Card className="luxury-card group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-display text-center">
                More Than Clothes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                A portion of our proceeds supports families of medically complex children — because no one should feel alone on their journey.
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
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {socialMediaLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm" 
                  className={`flex flex-col items-center justify-center p-4 h-auto space-y-2 ${social.color} transition-colors duration-200`}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{social.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Send Us a Message */}
          <div>
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-xl font-display">
                  Send Us a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Have a question not covered here? We'd love to help!
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your question..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full btn-luxury">
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll get back to you within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;