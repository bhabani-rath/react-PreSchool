import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const BlobMorph = ({
  color = "var(--theme-primary)",
  opacity = 0.15,
  size = "md",
  className,
  blur = true,
}) => {
  const sizes = {
    sm: "h-32 w-32 mobile-large:h-40 mobile-large:w-40 tablet:h-48 tablet:w-48",
    md: "h-48 w-48 mobile-large:h-64 mobile-large:w-64 tablet:h-80 tablet:w-80 desktop:h-96 desktop:w-96",
    lg: "h-64 w-64 mobile-large:h-80 mobile-large:w-80 tablet:h-[400px] tablet:w-[400px] desktop:h-[500px] desktop:w-[500px]",
    xl: "h-80 w-80 mobile-large:h-96 mobile-large:w-96 tablet:h-[500px] tablet:w-[500px] desktop:h-[600px] desktop:w-[600px]",
  };

  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "50% 50% 40% 60% / 40% 50% 60% 50%",
          "40% 60% 50% 50% / 60% 40% 50% 50%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        sizes[size],
        blur && "blur-3xl",
        "absolute pointer-events-none",
        className
      )}
      style={{
        backgroundColor: color,
        opacity,
      }}
    />
  );
};

export default BlobMorph;