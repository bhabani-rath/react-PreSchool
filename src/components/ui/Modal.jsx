import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center
                        p-3 mobile-large:p-4 tablet:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10
                       w-full max-w-sm
                       mobile-large:max-w-md
                       tablet:max-w-lg
                       laptop:max-w-xl
                       max-h-[85vh] overflow-y-auto
                       rounded-2xl mobile-large:rounded-3xl
                       bg-surface
                       p-4 mobile-large:p-6 tablet:p-8
                       shadow-2xl"
          >
            {/* Header */}
            <div className="mb-4 mobile-large:mb-5 tablet:mb-6
                            flex items-center justify-between">
              <h3 className="font-heading text-lg
                             mobile-large:text-xl
                             tablet:text-2xl
                             font-bold text-text-primary">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="flex h-8 w-8 mobile-large:h-9 mobile-large:w-9
                           items-center justify-center
                           rounded-xl bg-background
                           transition-colors hover:bg-accent/10"
                aria-label="Close"
              >
                <X className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
              </button>
            </div>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;