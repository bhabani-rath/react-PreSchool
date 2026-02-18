import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ProgramCards from "@/components/home/ProgramCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VirtualTourSection from "@/components/home/VirtualTourSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import GalleryPreview from "@/components/home/GalleryPreview";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import CTABanner from "@/components/common/CTABanner";

const HomePage = () => {
  const seo = seoConfig.home;

  return (
    <PageTransition>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url={seo.url}
        image={seo.image}
      />
      <HeroSection />
      <StatsCounter />
      <ProgramCards />
      <WhyChooseUs />
      <VirtualTourSection />
      <TestimonialsCarousel />
      <GalleryPreview />
      <UpcomingEvents />
      <CTABanner />
    </PageTransition>
  );
};

export default HomePage;