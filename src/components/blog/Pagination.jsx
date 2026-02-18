import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-8 mobile-large:mt-10 tablet:mt-12
                    flex items-center justify-center
                    gap-1.5 mobile-large:gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1
                   rounded-lg px-3 py-2
                   mobile-large:px-4 mobile-large:py-2.5
                   text-xs mobile-large:text-sm
                   font-medium text-text-secondary
                   hover:bg-surface hover:text-text-primary
                   disabled:opacity-30 disabled:pointer-events-none
                   transition-all"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden mobile-large:inline">Prev</span>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "flex items-center justify-center",
            "h-9 w-9 mobile-large:h-10 mobile-large:w-10",
            "rounded-lg text-xs mobile-large:text-sm font-medium",
            "transition-all",
            currentPage === page
              ? "bg-primary text-white shadow-md"
              : "text-text-secondary hover:bg-surface"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1
                   rounded-lg px-3 py-2
                   mobile-large:px-4 mobile-large:py-2.5
                   text-xs mobile-large:text-sm
                   font-medium text-text-secondary
                   hover:bg-surface hover:text-text-primary
                   disabled:opacity-30 disabled:pointer-events-none
                   transition-all"
      >
        <span className="hidden mobile-large:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;