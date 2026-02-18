import SectionHeading from "@/components/common/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";
import FadeIn from "@/components/animations/FadeIn";

const FAQAccordion = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about admissions"
        />

        <FadeIn>
          <Accordion items={faqsData} />
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQAccordion;