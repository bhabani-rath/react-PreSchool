import { motion } from "framer-motion";

const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}) => {
  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -60 },
    right: { x: 60 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;