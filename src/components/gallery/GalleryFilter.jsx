import { motion } from "framer-motion";
import { galleryCategories } from "@/data/gallery";
import { cn } from "@/utils/cn";

const GalleryFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-none
                    mb-6 mobile-large:mb-8 tablet:mb-10">
      <div className="flex items-center gap-2 mobile-large:gap-3
                      min-w-max phablet:min-w-0
                      phablet:flex-wrap phablet:justify-center">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onFilterChange(cat.id)}
            className={cn(
              "relative rounded-full",
              "px-4 py-2 mobile-large:px-5 mobile-large:py-2.5",
              "text-xs mobile-large:text-sm",
              "font-medium font-subheading",
              "transition-all whitespace-nowrap",
              activeFilter === cat.id
                ? "text-white"
                : "text-text-secondary bg-surface shadow-sm ring-1 ring-black/5 hover:text-text-primary"
            )}
          >
            {activeFilter === cat.id && (
              <motion.span
                layoutId="activeGalleryFilter"
                className="absolute inset-0 rounded-full
                           bg-gradient-to-r from-primary to-secondary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilter;