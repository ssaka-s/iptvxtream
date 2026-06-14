import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FaqPreviewSection } from '@/components/sections/FaqPreviewSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { SeoTextSection } from '@/components/sections/SeoTextSection';
import { DemoVideoSection } from '@/components/sections/DemoVideoSection';
import { TabPricingSection } from '@/components/sections/TabPricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'TV en direct en ligne en France',
  description:
    'Regardez la TV en streaming en France, sans engagement. Chaînes HD et 4K sur Smart TV, mobile et navigateur. Offres de TV en ligne accessibles.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SeoTextSection />
      <DemoVideoSection />
      <TabPricingSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqPreviewSection />
    </>
  );
}
