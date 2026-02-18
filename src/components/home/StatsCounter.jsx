import { motion } from "framer-motion";
import CountUpNumber from "@/components/animations/CountUpNumber";
import { statsData } from "@/data/stats";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const StatsCounter = () => {
  return (
    <section className="relative -mt-4 mobile-large:-mt-6 tablet:-mt-8
                        z-20">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2
                     phablet:grid-cols-3
                     laptop:grid-cols-5
                     gap-3 mobile-large:gap-4 tablet:gap-5"
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center text-center
                         py-5 mobile-large:py-6 tablet:py-8
                         px-3 mobile-large:px-4
                         rounded-2xl mobile-large:rounded-3xl
                         bg-surface
                         shadow-md hover:shadow-xl
                         ring-1 ring-black/5
                         transition-all duration-300"
            >
              <div className="mb-2.5 mobile-large:mb-3
                              h-10 w-10 mobile-large:h-12 mobile-large:w-12
                              tablet:h-14 tablet:w-14
                              rounded-xl mobile-large:rounded-2xl
                              bg-primary/15
                              flex items-center justify-center">
                <stat.icon className="h-5 w-5
                                      mobile-large:h-6 mobile-large:w-6
                                      tablet:h-7 tablet:w-7
                                      text-primary" />
              </div>
              <span className="font-heading text-xl
                               mobile-large:text-2xl
                               tablet:text-3xl
                               desktop:text-4xl
                               font-bold text-text-primary">
                <CountUpNumber
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </span>
              <span className="mt-1
                               text-[10px] mobile-large:text-xs
                               tablet:text-sm
                               font-medium text-text-secondary">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;