import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const downloads = [
  {
    icon: "📄",
    title: "Admission Brochure",
    description: "Complete school information & programs",
    file: siteConfig.downloads.brochure,
  },
  {
    icon: "💰",
    title: "Fee Structure",
    description: "Detailed fee breakdown for all programs",
    file: siteConfig.downloads.feeStructure,
  },
  {
    icon: "📅",
    title: "School Calendar",
    description: "Academic calendar 2025-26",
    file: siteConfig.downloads.schoolCalendar,
  },
  {
    icon: "📚",
    title: "Sample Curriculum",
    description: "Curriculum overview for all levels",
    file: siteConfig.downloads.sampleCurriculum,
  },
];

const DownloadSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Downloads 📥"
          subtitle="Download useful documents and resources"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {downloads.map((item, i) => (
            <motion.a
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              href={item.file}
              download
              className="group rounded-xl mobile-large:rounded-2xl
                         bg-surface p-5 mobile-large:p-6 tablet:p-7
                         shadow-md ring-1 ring-black/5
                         transition-all hover:shadow-xl
                         flex flex-col items-center text-center
                         cursor-pointer"
            >
              <span className="text-3xl mobile-large:text-4xl tablet:text-5xl
                               mb-3 mobile-large:mb-4">
                {item.icon}
              </span>
              <h3 className="font-heading text-sm
                             mobile-large:text-base tablet:text-lg
                             font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-1 mobile-large:mt-2
                            text-[10px] mobile-large:text-xs tablet:text-sm
                            text-text-secondary">
                {item.description}
              </p>
              <div className="mt-3 mobile-large:mt-4
                              flex items-center gap-1.5
                              text-xs mobile-large:text-sm
                              font-semibold text-primary
                              group-hover:gap-2.5 transition-all">
                <Download className="h-4 w-4" />
                Download PDF
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;