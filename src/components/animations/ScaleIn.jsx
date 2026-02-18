import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className,
  once = true,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: initialScale,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;