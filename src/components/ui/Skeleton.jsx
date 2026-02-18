import { cn } from "@/utils/cn";

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-black/5",
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;