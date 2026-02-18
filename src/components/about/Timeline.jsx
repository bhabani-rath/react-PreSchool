import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/common/SectionHeading";
import DrawLine from "@/components/animations/DrawLine";
import { timelineData } from "@/data/timeline";
import { cn } from "@/utils/cn";

const TimelineItem = ({ item, index, isLast }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Desktop Layout: Alternating sides */}
      <div className="hidden laptop:grid grid-cols-[1fr_auto_1fr] gap-6 desktop:gap-8">
        {/* Left Content */}
        <div className={cn("flex", isLeft ? "justify-end" : "")}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-sm desktop:max-w-md text-right"
            >
              <span className="text-xs desktop:text-sm font-bold text-primary">
                {item.year}
              </span>
              <h3 className="mt-1 font-heading text-lg desktop:text-xl
                             font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm desktop:text-base
                            text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Center - Icon & Line */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex h-12 w-12 desktop:h-14 desktop:w-14
                       items-center justify-center rounded-full
                       bg-primary shadow-lg shadow-primary/30
                       text-xl desktop:text-2xl z-10"
          >
            {item.icon}
          </motion.div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
          )}
        </div>

        {/* Right Content */}
        <div className={cn("flex", !isLeft ? "justify-start" : "")}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-sm desktop:max-w-md"
            >
              <span className="text-xs desktop:text-sm font-bold text-primary">
                {item.year}
              </span>
              <h3 className="mt-1 font-heading text-lg desktop:text-xl
                             font-bold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm desktop:text-base
                            text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile & Tablet Layout: Left aligned */}
      <div className="laptop:hidden flex gap-4 mobile-large:gap-5">
        {/* Icon & Line */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex h-10 w-10 mobile-large:h-11 mobile-large:w-11
                       tablet:h-12 tablet:w-12
                       items-center justify-center rounded-full
                       bg-primary shadow-lg shadow-primary/30
                       text-lg mobile-large:text-xl z-10 flex-shrink-0"
          >
            {item.icon}
          </motion.div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
          )}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pb-8 mobile-large:pb-10"
        >
          <span className="text-xs mobile-large:text-sm
                           font-bold text-primary">
            {item.year}
          </span>
          <h3 className="mt-1 font-heading text-base
                         mobile-large:text-lg tablet:text-xl
                         font-bold text-text-primary">
            {item.title}
          </h3>
          <p className="mt-1.5 text-xs mobile-large:text-sm
                        tablet:text-base
                        text-text-secondary leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading
          title="Our Journey & Milestones"
          subtitle="Key moments that shaped who we are today"
        />

        <div className="relative">
          {timelineData.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;