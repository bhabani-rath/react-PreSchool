import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

const GalleryLightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const isOpen = currentIndex >= 0;
  const current = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1 && onNavigate) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0 && onNavigate) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200]
                     flex items-center justify-center
                     bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4
                       mobile-large:top-5 mobile-large:right-5
                       tablet:top-6 tablet:right-6
                       flex h-10 w-10 mobile-large:h-12 mobile-large:w-12
                       items-center justify-center
                       rounded-full bg-white/10 text-white
                       hover:bg-white/25 transition-colors z-10
                       backdrop-blur-sm"
          >
            <X className="h-5 w-5 mobile-large:h-6 mobile-large:w-6" />
          </button>

          {/* Counter badge */}
          <div className="absolute top-4 left-4
                          mobile-large:top-5 mobile-large:left-5
                          tablet:top-6 tablet:left-6
                          text-xs mobile-large:text-sm
                          text-white/70 bg-black/40 backdrop-blur-sm
                          px-3 py-1.5 rounded-full z-10 font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Main Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[90vw] max-h-[85vh]
                       flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[80vh] w-auto h-auto
                         object-contain
                         rounded-lg mobile-large:rounded-xl
                         shadow-2xl"
              draggable={false}
            />

            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0
                            bg-gradient-to-t from-black/70 via-black/30 to-transparent
                            rounded-b-lg mobile-large:rounded-b-xl
                            p-4 mobile-large:p-5 pt-10">
              <p className="text-sm mobile-large:text-base tablet:text-lg
                            text-white font-medium drop-shadow-md">
                {current.alt}
              </p>
              {current.category && (
                <span className="inline-block mt-1.5
                                 text-[10px] mobile-large:text-xs
                                 text-white/70 bg-white/15
                                 px-2.5 py-0.5 rounded-full
                                 capitalize backdrop-blur-sm">
                  {current.category}
                </span>
              )}
            </div>
          </motion.div>

          {/* Navigation — Previous */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 mobile-large:left-4 tablet:left-8
                         top-1/2 -translate-y-1/2
                         flex h-11 w-11 mobile-large:h-12 mobile-large:w-12
                         items-center justify-center
                         rounded-full bg-white/10 text-white
                         hover:bg-white/25 transition-all
                         backdrop-blur-sm
                         hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 mobile-large:h-6 mobile-large:w-6" />
            </button>
          )}

          {/* Navigation — Next */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 mobile-large:right-4 tablet:right-8
                         top-1/2 -translate-y-1/2
                         flex h-11 w-11 mobile-large:h-12 mobile-large:w-12
                         items-center justify-center
                         rounded-full bg-white/10 text-white
                         hover:bg-white/25 transition-all
                         backdrop-blur-sm
                         hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5 mobile-large:h-6 mobile-large:w-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;