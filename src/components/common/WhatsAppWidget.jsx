import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const WhatsAppWidget = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4
                    mobile-large:bottom-5 mobile-large:right-5
                    tablet:bottom-6 tablet:right-6
                    desktop:bottom-8 desktop:right-8
                    z-[90]">
      <AnimatePresence>
        {isTooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3
                       w-56 mobile-large:w-64 tablet:w-72
                       rounded-2xl bg-surface p-4 mobile-large:p-5
                       shadow-xl ring-1 ring-black/5"
          >
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="absolute right-2 top-2 p-1 text-text-secondary
                         hover:text-text-primary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm mobile-large:text-base font-semibold text-text-primary">
              💬 Chat with us!
            </p>
            <p className="mt-1 text-xs mobile-large:text-sm text-text-secondary">
              Hi! Have questions about admissions? We're here to help.
            </p>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2
                         rounded-xl bg-[#25D366] px-4 py-2.5
                         mobile-large:py-3
                         text-xs mobile-large:text-sm
                         font-bold text-white
                         transition-all hover:bg-[#20BD5A] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsTooltipOpen(!isTooltipOpen)}
        className="flex items-center justify-center
                   h-12 w-12
                   mobile-large:h-14 mobile-large:w-14
                   tablet:h-16 tablet:w-16
                   rounded-full bg-[#25D366] text-white
                   shadow-lg shadow-[#25D366]/30
                   transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5
                                  mobile-large:h-6 mobile-large:w-6
                                  tablet:h-7 tablet:w-7" />
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;