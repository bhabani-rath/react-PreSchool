import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import ProgramTabs from "@/components/programs/ProgramTabs";
import ProgramDetail from "@/components/programs/ProgramDetail";
import ComparisonTable from "@/components/programs/ComparisonTable";
import ExtraCurricular from "@/components/programs/ExtraCurricular";
import AssessmentSection from "@/components/programs/AssessmentSection";
import CTABanner from "@/components/common/CTABanner";
import { programsData } from "@/data/programs";

const ProgramsPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "playschool";
  const [activeTab, setActiveTab] = useState(initialTab);
  const activeProgram = programsData.find((p) => p.id === activeTab) || programsData[0];
  const seo = seoConfig.programs;

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <PageHero
        title="Our Learning Programs"
        subtitle="Structured curriculum for every developmental stage"
        breadcrumbs={[{ label: "Programs" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <ProgramTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <ProgramDetail program={activeProgram} />
        </div>
      </section>
      <ComparisonTable />
      <ExtraCurricular />
      <AssessmentSection />
      <CTABanner />
    </PageTransition>
  );
};

export default ProgramsPage;