import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import ConfettiEffect from "@/components/animations/ConfettiEffect";
import ProcessStepper from "@/components/admissions/ProcessStepper";
import EligibilityTable from "@/components/admissions/EligibilityTable";
import DocumentChecklist from "@/components/admissions/DocumentChecklist";
import FeeCards from "@/components/admissions/FeeCards";
import AdmissionForm from "@/components/admissions/AdmissionForm";
import FAQAccordion from "@/components/admissions/FAQAccordion";
import DownloadSection from "@/components/admissions/DownloadSection";
import CTABanner from "@/components/common/CTABanner";

const AdmissionsPage = () => {
  const seo = seoConfig.admissions;

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <ConfettiEffect autoTrigger count={60} />
      <PageHero
        title="Begin Your Child's Journey With Us"
        subtitle="Admissions open for 2025-26 academic session"
        breadcrumbs={[{ label: "Admissions" }]}
      />
      <ProcessStepper />
      <EligibilityTable />
      <DocumentChecklist />
      <FeeCards />
      <AdmissionForm />
      <FAQAccordion />
      <DownloadSection />
      <CTABanner />
    </PageTransition>
  );
};

export default AdmissionsPage;