import { motion } from "framer-motion";

const FloatingElement = ({
  children,
  duration = 3,
  distance = 20,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;