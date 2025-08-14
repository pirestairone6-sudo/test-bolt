import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


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
        {/* Info Card */}
        <div className="mb-12">
          <Card className="luxury-card group hover:scale-105 transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-center">
                Our Promise to You
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every garment is designed with comfort, safety, and dignity in mind — because your baby deserves the very best from day one. We understand the unique challenges families face, and our clothing is thoughtfully created to make daily care routines easier while keeping your little one looking adorable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-3xl font-display text-center mb-4">
              Frequently Asked Questions
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Everything you need to know about our adaptive clothing collection
            </p>
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

      <Footer />
    </div>
  );
};

export default FAQ;
