import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const documents = [
  "Birth Certificate (Original + Copy)",
  "Aadhaar Card (Child + Parents)",
  "Passport Size Photographs (6 nos)",
  "Address Proof",
  "Previous School TC (if applicable)",
  "Medical / Immunization Records",
  "Parent's ID Proof",
];

const DocumentChecklist = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Required Documents"
          subtitle="Keep these documents ready for the admission process"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl mobile-large:rounded-3xl
                     bg-surface p-5 mobile-large:p-6 tablet:p-8 desktop:p-10
                     shadow-md ring-1 ring-black/5"
        >
          <div className="space-y-3 mobile-large:space-y-4">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-3 mobile-large:gap-4
                           rounded-xl bg-background
                           px-4 py-3 mobile-large:px-5 mobile-large:py-4"
              >
                <CheckSquare className="h-5 w-5 mobile-large:h-6 mobile-large:w-6
                                        text-secondary flex-shrink-0" />
                <span className="text-sm mobile-large:text-base tablet:text-lg
                                 text-text-primary">
                  {doc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentChecklist;