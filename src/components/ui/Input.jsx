import { cn } from "@/utils/cn";

const Input = ({ label, error, ref, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 mobile-large:mb-2 block
                          text-xs mobile-large:text-sm
                          font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl",
          "bg-background",
          "px-3 py-2.5",
          "mobile-large:px-4 mobile-large:py-3",
          "text-sm mobile-large:text-base",
          "text-text-primary placeholder:text-text-secondary/50",
          "outline-none ring-1 ring-black/10",
          "transition-all duration-200",
          "focus:ring-2 focus:ring-primary",
          error && "ring-2 ring-accent",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 mobile-large:mt-1.5
                      text-xs mobile-large:text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;