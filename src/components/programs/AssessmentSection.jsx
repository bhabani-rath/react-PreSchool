import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const assessments = [
  { icon: "📋", title: "Continuous Observation", description: "Based assessment throughout the year" },
  { icon: "📊", title: "Quarterly Progress Reports", description: "Detailed reports every 3 months" },
  { icon: "👨‍👩‍👧", title: "Parent-Teacher Interactions", description: "Regular meetings and feedback sessions" },
  { icon: "📱", title: "Digital Report Cards", description: "Access reports via our parent app" },
  { icon: "🏆", title: "Milestone Certificates", description: "Achievement certificates for every milestone" },
];

const AssessmentSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-main">
        <SectionHeading
          title="Assessment & Reporting"
          subtitle="How we track and celebrate your child's progress"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-3
                     desktop:grid-cols-5
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {assessments.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl mobile-large:rounded-2xl
                         bg-surface p-4 mobile-large:p-5 tablet:p-6
                         shadow-md ring-1 ring-black/5 text-center"
            >
              <span className="text-3xl mobile-large:text-4xl">{item.icon}</span>
              <h3 className="mt-2 mobile-large:mt-3
                             text-xs mobile-large:text-sm tablet:text-base
                             font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-[10px] mobile-large:text-xs
                            text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentSection;