import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { cn } from "@/utils/cn";

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "mb-8 mobile-large:mb-10 tablet:mb-12 desktop:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className="font-heading text-2xl
                    mobile-large:text-3xl
                    phablet:text-4xl
                    tablet:text-[40px]
                    laptop:text-[44px]
                    desktop:text-5xl
                    font-bold text-text-primary"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-2 mobile-large:mt-3 tablet:mt-4
                     text-sm mobile-large:text-base tablet:text-lg
                     text-text-secondary
                     max-w-xl tablet:max-w-2xl desktop:max-w-3xl
                     mx-auto"
        >
          {subtitle}
        </p>
      )}
      <div
        className="mx-auto mt-3 mobile-large:mt-4 h-1
                    w-16 mobile-large:w-20 tablet:w-24
                    rounded-full bg-gradient-to-r from-primary to-accent"
      />
    </motion.div>
  );
};

export default SectionHeading;