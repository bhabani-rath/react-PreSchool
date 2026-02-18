import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

const ParallaxWrapper = ({
  children,
  speed = 0.5,
  direction = "up",
  className,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 100 * speed;

  const yUp = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-range, range]);

  const getMotionStyle = () => {
    switch (direction) {
      case "up":
        return { y: yUp };
      case "down":
        return { y: yDown };
      case "left":
        return { x: xLeft };
      case "right":
        return { x: xRight };
      default:
        return { y: yUp };
    }
  };

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={getMotionStyle()}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxWrapper;