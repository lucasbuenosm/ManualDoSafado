import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { PromiseSection } from '@/components/landing/promise-section';
import { Features } from '@/components/landing/features';
import { Bonuses } from '@/components/landing/bonuses';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { Upsell } from '@/components/landing/upsell';
import { Footer } from '@/components/landing/footer';
import { ScrollAnimator } from '@/components/ui/scroll-animator';
import { WhatsAppButton } from '@/components/landing/whatsapp-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScrollAnimator>
          <PromiseSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <Features />
        </ScrollAnimator>
        <ScrollAnimator>
          <Bonuses />
        </ScrollAnimator>
        <ScrollAnimator>
          <Testimonials />
        </ScrollAnimator>
        <ScrollAnimator>
          <Pricing />
        </ScrollAnimator>
        <ScrollAnimator>
          <Upsell />
        </ScrollAnimator>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
