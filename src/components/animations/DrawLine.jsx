import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const DrawLine = ({
  width = "100%",
  height = 2,
  color = "var(--theme-primary)",
  duration = 1,
  delay = 0,
  direction = "horizontal",
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (direction === "vertical") {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        style={{ width: `${height}px`, height: width }}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute left-0 top-0 w-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ height: `${height}px`, width }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute left-0 top-0 h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default DrawLine;