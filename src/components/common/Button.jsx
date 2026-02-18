import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-primary text-text-primary hover:shadow-lg hover:shadow-primary/30",
  secondary:
    "bg-secondary text-white hover:shadow-lg hover:shadow-secondary/30",
  accent:
    "bg-accent text-white hover:shadow-lg hover:shadow-accent/30",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-text-primary",
  ghost:
    "text-text-secondary hover:bg-black/5 hover:text-text-primary",
};

const sizes = {
  sm: "px-3 py-1.5 mobile-large:px-4 mobile-large:py-2 text-xs mobile-large:text-sm rounded-lg",
  md: "px-4 py-2 mobile-large:px-5 mobile-large:py-2.5 tablet:px-6 tablet:py-3 text-sm tablet:text-base rounded-xl",
  lg: "px-6 py-3 mobile-large:px-7 mobile-large:py-3.5 tablet:px-8 tablet:py-4 text-base tablet:text-lg rounded-2xl",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ref,
  ...props
}) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "font-subheading font-bold",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;