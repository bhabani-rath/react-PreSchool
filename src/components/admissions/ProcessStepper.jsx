import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const steps = [
  { step: 1, icon: "📝", title: "Inquiry & Registration", description: "Fill online form or visit campus" },
  { step: 2, icon: "🏫", title: "Campus Visit", description: "Tour the school & meet teachers" },
  { step: 3, icon: "📄", title: "Submit Documents", description: "Provide required documents" },
  { step: 4, icon: "✅", title: "Confirmation", description: "Fee payment & seat confirmation" },
  { step: 5, icon: "🎉", title: "Welcome!", description: "Welcome to our family!" },
];

const ProcessStepper = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Admission Process"
          subtitle="5 simple steps to join our family"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     phablet:grid-cols-3
                     laptop:grid-cols-5
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector Line (Hidden on mobile, shown on laptop+) */}
              {i < steps.length - 1 && (
                <div className="hidden laptop:block
                                absolute top-8 left-[60%]
                                w-[80%] h-0.5
                                bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              {/* Step Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10
                           flex h-14 w-14
                           mobile-large:h-16 mobile-large:w-16
                           tablet:h-18 tablet:w-18
                           items-center justify-center
                           rounded-full bg-gradient-to-br from-primary to-secondary
                           text-2xl mobile-large:text-3xl
                           shadow-lg shadow-primary/30
                           mb-3 mobile-large:mb-4"
              >
                {step.icon}
              </motion.div>

              {/* Step Number */}
              <span className="text-[10px] mobile-large:text-xs
                               font-bold text-primary mb-1">
                Step {step.step}
              </span>

              {/* Title */}
              <h3 className="font-heading text-sm
                             mobile-large:text-base tablet:text-lg
                             font-bold text-text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-[10px] mobile-large:text-xs tablet:text-sm
                            text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessStepper;