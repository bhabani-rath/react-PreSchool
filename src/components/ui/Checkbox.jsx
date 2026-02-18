import { cn } from "@/utils/cn";

const Checkbox = ({
  label,
  error,
  ref,
  className,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      <label
        className={cn(
          "flex items-start gap-2.5 mobile-large:gap-3 cursor-pointer group",
          className
        )}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "peer h-4 w-4 mobile-large:h-5 mobile-large:w-5",
              "rounded-md mobile-large:rounded-lg",
              "border-2 border-black/20",
              "bg-background",
              "checked:bg-primary checked:border-primary",
              "transition-all duration-200",
              "focus:ring-2 focus:ring-primary/30",
              "cursor-pointer appearance-none",
              error && "border-accent"
            )}
            {...props}
          />
          {/* Custom checkmark */}
          <svg
            className="absolute top-0.5 left-0.5
                       mobile-large:top-[3px] mobile-large:left-[3px]
                       h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5
                       text-white pointer-events-none
                       opacity-0 peer-checked:opacity-100
                       transition-opacity duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <span className="text-xs mobile-large:text-sm tablet:text-base
                         text-text-secondary
                         group-hover:text-text-primary
                         transition-colors select-none">
          {label || children}
        </span>
      </label>

      {error && (
        <p className="mt-1 mobile-large:mt-1.5 ml-6 mobile-large:ml-8
                      text-xs mobile-large:text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;