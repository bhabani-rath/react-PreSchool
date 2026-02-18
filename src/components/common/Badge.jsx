import { cn } from "@/utils/cn";

const Badge = ({ children, variant = "primary", className }) => {
  const variants = {
    primary: "bg-primary/15 text-primary",
    secondary: "bg-secondary/15 text-secondary",
    accent: "bg-accent/15 text-accent",
    surface: "bg-surface text-text-primary shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "rounded-full px-3 py-1",
        "mobile-large:px-4 mobile-large:py-1.5",
        "text-xs mobile-large:text-sm font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;