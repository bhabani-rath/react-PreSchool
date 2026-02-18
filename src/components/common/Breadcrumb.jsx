import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav
      className="flex items-center gap-1 mobile-large:gap-1.5 tablet:gap-2
                 text-xs mobile-large:text-sm text-text-secondary
                 flex-wrap"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Home className="h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5" />
        <span className="hidden mobile-large:inline">Home</span>
      </Link>

      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1 mobile-large:gap-1.5 tablet:gap-2">
          <ChevronRight className="h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5 flex-shrink-0" />
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-primary transition-colors truncate max-w-[100px] mobile-large:max-w-[150px] tablet:max-w-none"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary font-medium truncate max-w-[120px] mobile-large:max-w-[180px] tablet:max-w-none">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;