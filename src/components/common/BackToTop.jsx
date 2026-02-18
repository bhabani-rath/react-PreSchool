import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4
                     mobile-large:bottom-5 mobile-large:left-5
                     tablet:bottom-6 tablet:left-6
                     desktop:bottom-8 desktop:left-8
                     z-[90]
                     flex items-center justify-center
                     h-10 w-10
                     mobile-large:h-12 mobile-large:w-12
                     rounded-full bg-primary text-text-primary
                     shadow-lg shadow-primary/30
                     transition-shadow hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;