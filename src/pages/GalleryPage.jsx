import { useState } from "react";
import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import EventsCalendar from "@/components/gallery/EventsCalendar";
import PastEventHighlights from "@/components/gallery/PastEventHighlights";
import CTABanner from "@/components/common/CTABanner";
import { galleryData } from "@/data/gallery";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const seo = seoConfig.gallery;

  const filteredImages =
    activeFilter === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeFilter);

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <PageHero
        title="Gallery & Celebrations"
        subtitle="Precious moments of learning, playing & growing"
        breadcrumbs={[{ label: "Gallery & Events" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <GalleryFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <MasonryGrid images={filteredImages} />
        </div>
      </section>
      <VideoGallery />
      <EventsCalendar />
      <PastEventHighlights />
      <CTABanner />
    </PageTransition>
  );
};

export default GalleryPage;