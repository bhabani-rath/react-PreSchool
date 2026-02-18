import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { featuresData } from "@/data/features";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import { cn } from "@/utils/cn";

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Everything your child needs for a strong foundation"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-3
                     desktop:grid-cols-4
                     gap-4 mobile-large:gap-5
                     tablet:gap-6"
        >
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "group rounded-2xl mobile-large:rounded-3xl",
                "bg-surface p-5 mobile-large:p-6 tablet:p-7",
                "shadow-md ring-1 ring-black/5",
                "transition-all duration-300 hover:shadow-xl",
                // Make first & last items span 2 cols on tablet
                i === 0 && "laptop:col-span-1",
                i === featuresData.length - 1 && "laptop:col-span-1"
              )}
            >
              {/* Icon */}
              <div className="mb-3 mobile-large:mb-4
                              flex h-12 w-12
                              mobile-large:h-14 mobile-large:w-14
                              tablet:h-16 tablet:w-16
                              items-center justify-center
                              rounded-2xl bg-primary/10
                              text-2xl mobile-large:text-3xl tablet:text-4xl
                              group-hover:scale-110
                              transition-transform duration-300">
                {feature.emoji}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base
                             mobile-large:text-lg
                             tablet:text-xl
                             font-bold text-text-primary">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 mobile-large:mt-3
                            text-xs mobile-large:text-sm
                            tablet:text-base
                            leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;