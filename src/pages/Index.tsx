import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FoundersStorySection from '@/components/FoundersStorySection';
import ProductPreviewSection from '@/components/ProductPreviewSection';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import EmailCaptureSection from '@/components/EmailCaptureSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FoundersStorySection />
        <ProductPreviewSection />
        <DifferentiatorSection />
        <EmailCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
