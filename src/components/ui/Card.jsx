import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = ({
  children,
  className,
  hover = true,
  padding = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-xl mobile-large:rounded-2xl",
        "bg-surface shadow-md",
        "ring-1 ring-black/5",
        "transition-shadow duration-300",
        hover && "hover:shadow-xl",
        padding && "p-4 mobile-large:p-5 tablet:p-6 desktop:p-8",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;