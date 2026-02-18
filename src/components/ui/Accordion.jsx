import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between
                   py-4 mobile-large:py-5 tablet:py-6
                   text-left transition-colors hover:text-primary"
      >
        <span className="text-sm mobile-large:text-base tablet:text-lg
                         font-semibold text-text-primary pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                  text-text-secondary" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 mobile-large:pb-5 tablet:pb-6
                          text-xs mobile-large:text-sm tablet:text-base
                          leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items = [], allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="rounded-2xl bg-surface
                    p-4 mobile-large:p-5 tablet:p-6 desktop:p-8
                    shadow-md ring-1 ring-black/5">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(i)}
          onToggle={() => toggleItem(i)}
        />
      ))}
    </div>
  );
};

export default Accordion;