import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import OurStory from "@/components/about/OurStory";
import Timeline from "@/components/about/Timeline";
import FounderMessage from "@/components/about/FounderMessage";
import TeachingMethodology from "@/components/about/TeachingMethodology";
import TeamGrid from "@/components/about/TeamGrid";
import InfrastructureTabs from "@/components/about/InfrastructureTabs";
import AwardsMarquee from "@/components/about/AwardsMarquee";
import CTABanner from "@/components/common/CTABanner";

const AboutPage = () => {
  const seo = seoConfig.about;

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <PageHero
        title="Our Story of Nurturing Young Minds"
        subtitle="Discover what makes Little Bloomers special"
        breadcrumbs={[{ label: "About Us" }]}
      />
      <OurStory />
      <Timeline />
      <FounderMessage />
      <TeachingMethodology />
      <TeamGrid />
      <InfrastructureTabs />
      <AwardsMarquee />
      <CTABanner />
    </PageTransition>
  );
};

export default AboutPage;