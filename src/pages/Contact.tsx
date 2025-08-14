import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Atelier',
      details: ['123 Fashion Street', 'Stoke Newington', 'London N16 8AB', 'United Kingdom']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 20 7946 0958', 'Mon-Fri: 9:00-18:00', 'Sat-Sun: 10:00-16:00']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@petitluxe.com', 'orders@petitluxe.com', 'press@petitluxe.com']
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 17:00', 'Sunday: 11:00 - 16:00']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="hero-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We'd love to hear from you. Whether you have questions about our collections, 
            need styling advice, or want to visit our London atelier, we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="+44 20 1234 5678" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full btn-luxury">
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="luxury-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold">
                        {info.title}
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="luxury-card overflow-hidden">
              <div className="aspect-[16/10] bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-lg mb-2">
                      Visit Our London Atelier
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      123 Fashion Street, Stoke Newington, London
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="luxury-card">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-lg mb-4">
                  Follow Our Journey
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Stay connected with us on social media for the latest collections, 
                  behind-the-scenes content, and styling inspiration.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="luxury-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-semibold text-lg mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find quick answers to common questions about our products, 
                  shipping, and care instructions.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/faq'}>
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;