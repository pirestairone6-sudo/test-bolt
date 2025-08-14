import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you!",
        description: "You'll be the first to know when we launch.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="luxury-card p-8 lg:p-16">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 hero-text">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              You don't need to compromise between function and style. Join the families 
              rethinking babywear from the inside out.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-center sm:text-left"
            />
            <Button type="submit" className="btn-luxury group h-12 px-8">
              Join Launch List
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 font-light">
            Early supporters receive exclusive access and special launch pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;