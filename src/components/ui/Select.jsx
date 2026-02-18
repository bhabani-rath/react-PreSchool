import { cn } from "@/utils/cn";

const Select = ({ label, error, options = [], ref, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 mobile-large:mb-2 block
                          text-xs mobile-large:text-sm
                          font-medium text-text-primary">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          "w-full rounded-xl",
          "bg-background",
          "px-3 py-2.5",
          "mobile-large:px-4 mobile-large:py-3",
          "text-sm mobile-large:text-base",
          "text-text-primary",
          "outline-none ring-1 ring-black/10",
          "transition-all duration-200",
          "focus:ring-2 focus:ring-primary",
          "appearance-none cursor-pointer",
          error && "ring-2 ring-accent",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 mobile-large:mt-1.5
                      text-xs mobile-large:text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;