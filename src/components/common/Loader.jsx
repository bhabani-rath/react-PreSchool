import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const Loader = ({ fullScreen = true, size = "md" }) => {
  const { activeTheme } = useTheme();

  const sizes = {
    sm: {
      container: "h-6 w-6 mobile-large:h-8 mobile-large:w-8",
      dot: "h-1.5 w-1.5 mobile-large:h-2 mobile-large:w-2",
    },
    md: {
      container: "h-10 w-10 mobile-large:h-12 mobile-large:w-12 tablet:h-14 tablet:w-14",
      dot: "h-2 w-2 mobile-large:h-2.5 mobile-large:w-2.5 tablet:h-3 tablet:w-3",
    },
    lg: {
      container: "h-16 w-16 mobile-large:h-20 mobile-large:w-20 tablet:h-24 tablet:w-24",
      dot: "h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5 tablet:h-4 tablet:w-4",
    },
  };

  const dots = [0, 1, 2, 3];

  const Spinner = () => (
    <div className="flex flex-col items-center gap-4 mobile-large:gap-5">
      <div className={`relative ${sizes[size].container}`}>
        {dots.map((i) => (
          <motion.span
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full ${sizes[size].dot}`}
            style={{
              backgroundColor: activeTheme.colors.primary,
              top: i === 0 ? "0" : i === 2 ? "auto" : "50%",
              bottom: i === 2 ? "0" : "auto",
              left: i === 3 ? "0" : i === 1 ? "auto" : "50%",
              right: i === 1 ? "0" : "auto",
              transform:
                i === 0 || i === 2
                  ? "translateX(-50%)"
                  : "translateY(-50%)",
            }}
          />
        ))}
      </div>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-xs mobile-large:text-sm tablet:text-base
                   font-medium text-text-secondary"
      >
        Loading...
      </motion.p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[200]
                      flex items-center justify-center
                      bg-background/80 backdrop-blur-sm">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center
                    py-10 mobile-large:py-12 tablet:py-16 desktop:py-20">
      <Spinner />
    </div>
  );
};

export default Loader;