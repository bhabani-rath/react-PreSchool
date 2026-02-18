import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const positionStyles = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowStyles = {
  top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-text-primary",
  bottom: "top-[-4px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-text-primary",
  left: "right-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-text-primary",
  right: "left-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-text-primary",
};

const animationVariants = {
  top: { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 5 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -5 }, animate: { opacity: 1, x: 0 } },
};

const Tooltip = ({
  children,
  content,
  position = "top",
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!content) return children;

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={animationVariants[position].initial}
            animate={animationVariants[position].animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 pointer-events-none",
              "whitespace-nowrap rounded-lg",
              "bg-text-primary px-2.5 py-1.5",
              "mobile-large:px-3 mobile-large:py-2",
              "text-[10px] mobile-large:text-xs",
              "font-medium text-white",
              "shadow-lg",
              positionStyles[position],
              className
            )}
            role="tooltip"
          >
            {content}
            {/* Arrow */}
            <span
              className={cn(
                "absolute h-0 w-0",
                "border-4 border-solid",
                arrowStyles[position]
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;