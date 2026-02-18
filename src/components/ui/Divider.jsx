import { cn } from "@/utils/cn";

const Divider = ({
  orientation = "horizontal",
  decorative = false,
  text,
  className,
}) => {
  if (text) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 mobile-large:gap-4",
          "my-4 mobile-large:my-6 tablet:my-8",
          className
        )}
      >
        <div className="h-px flex-1 bg-black/10" />
        <span className="text-xs mobile-large:text-sm
                         font-medium text-text-secondary
                         whitespace-nowrap">
          {text}
        </span>
        <div className="h-px flex-1 bg-black/10" />
      </div>
    );
  }

  if (decorative) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          "my-6 mobile-large:my-8 tablet:my-10",
          className
        )}
      >
        <div className="h-1 w-1 mobile-large:h-1.5 mobile-large:w-1.5
                        rounded-full bg-primary" />
        <div className="h-px w-12 mobile-large:w-16 tablet:w-20
                        bg-gradient-to-r from-primary to-transparent" />
        <div className="h-2 w-2 mobile-large:h-2.5 mobile-large:w-2.5
                        rounded-full bg-primary" />
        <div className="h-px w-12 mobile-large:w-16 tablet:w-20
                        bg-gradient-to-l from-primary to-transparent" />
        <div className="h-1 w-1 mobile-large:h-1.5 mobile-large:w-1.5
                        rounded-full bg-primary" />
      </div>
    );
  }

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px bg-black/10",
          "mx-2 mobile-large:mx-3 tablet:mx-4",
          "self-stretch",
          className
        )}
      />
    );
  }

  return (
    <hr
      className={cn(
        "border-0 h-px bg-black/10",
        "my-4 mobile-large:my-6 tablet:my-8",
        className
      )}
    />
  );
};

export default Divider;