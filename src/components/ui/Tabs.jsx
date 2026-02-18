import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Tabs = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-1 mobile-large:gap-1.5 tablet:gap-2
                      p-1 mobile-large:p-1.5
                      rounded-xl mobile-large:rounded-2xl
                      bg-background
                      min-w-max tablet:min-w-0
                      tablet:flex-wrap tablet:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative rounded-lg mobile-large:rounded-xl",
              "px-3 py-2",
              "mobile-large:px-4 mobile-large:py-2.5",
              "tablet:px-5 tablet:py-3",
              "text-xs mobile-large:text-sm tablet:text-base",
              "font-medium font-subheading",
              "transition-colors whitespace-nowrap",
              activeTab === tab.id
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-lg mobile-large:rounded-xl
                           bg-surface shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 mobile-large:gap-2">
              {tab.icon && <span className="text-base mobile-large:text-lg">{tab.icon}</span>}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;