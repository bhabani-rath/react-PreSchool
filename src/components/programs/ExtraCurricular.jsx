import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { extracurricularData } from "@/data/extracurricular";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const ExtraCurricular = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Extra-Curricular Activities"
          subtitle="Beyond academics — building well-rounded personalities"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2
                     phablet:grid-cols-3
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {extracurricularData.map((activity, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="rounded-xl mobile-large:rounded-2xl
                         bg-surface p-4 mobile-large:p-5 tablet:p-6
                         shadow-md ring-1 ring-black/5
                         text-center transition-shadow hover:shadow-xl"
            >
              <span className="text-3xl mobile-large:text-4xl tablet:text-5xl">
                {activity.icon}
              </span>
              <h3 className="mt-2 mobile-large:mt-3
                             font-heading text-sm mobile-large:text-base
                             tablet:text-lg font-bold text-text-primary">
                {activity.title}
              </h3>
              <p className="mt-1 mobile-large:mt-2
                            text-[10px] mobile-large:text-xs tablet:text-sm
                            text-text-secondary leading-relaxed">
                {activity.description}
              </p>
              <p className="mt-2 text-[9px] mobile-large:text-[10px]
                            tablet:text-xs text-primary font-medium">
                📅 {activity.schedule}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraCurricular;