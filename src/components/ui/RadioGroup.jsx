import { cn } from "@/utils/cn";

const RadioGroup = ({
  label,
  name,
  options = [],
  error,
  ref,
  className,
  direction = "vertical",
  ...props
}) => {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <p className="mb-2 mobile-large:mb-3
                      text-xs mobile-large:text-sm
                      font-medium text-text-primary">
          {label}
        </p>
      )}

      <div
        className={cn(
          "flex gap-3 mobile-large:gap-4",
          direction === "vertical"
            ? "flex-col"
            : "flex-row flex-wrap"
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 mobile-large:gap-2.5
                       cursor-pointer group"
          >
            <div className="relative flex-shrink-0">
              <input
                ref={ref}
                type="radio"
                name={name}
                value={option.value}
                className={cn(
                  "peer h-4 w-4 mobile-large:h-5 mobile-large:w-5",
                  "rounded-full",
                  "border-2 border-black/20",
                  "bg-background",
                  "checked:border-primary",
                  "transition-all duration-200",
                  "focus:ring-2 focus:ring-primary/30",
                  "cursor-pointer appearance-none",
                  error && "border-accent"
                )}
                {...props}
              />
              {/* Custom radio dot */}
              <div
                className="absolute top-1/2 left-1/2
                           -translate-x-1/2 -translate-y-1/2
                           h-2 w-2 mobile-large:h-2.5 mobile-large:w-2.5
                           rounded-full bg-primary
                           opacity-0 peer-checked:opacity-100
                           scale-0 peer-checked:scale-100
                           transition-all duration-200"
              />
            </div>

            <span className="text-xs mobile-large:text-sm tablet:text-base
                             text-text-secondary
                             group-hover:text-text-primary
                             transition-colors select-none">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-1 mobile-large:mt-1.5
                      text-xs mobile-large:text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioGroup;