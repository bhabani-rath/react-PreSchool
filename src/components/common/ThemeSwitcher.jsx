import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";

const ThemeSwitcher = () => {
  const { themes, currentTheme, switchTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full
                   bg-surface px-2.5 py-1.5
                   mobile-large:px-3 mobile-large:py-2
                   shadow-md transition-shadow hover:shadow-lg"
        aria-label="Switch theme"
      >
        <Palette className="h-4 w-4 mobile-large:h-5 mobile-large:w-5 text-primary" />
        <span className="hidden phablet:inline text-xs font-medium text-text-secondary">
          Theme
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-2
                       w-64 mobile-large:w-72
                       rounded-2xl bg-surface p-3
                       shadow-xl ring-1 ring-black/5"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Choose Theme
            </p>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    switchTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-2.5 py-2 text-left transition-all",
                    "hover:bg-black/5",
                    currentTheme === theme.id &&
                      "ring-2 ring-primary bg-primary/10"
                  )}
                >
                  <span
                    className="h-5 w-5 mobile-large:h-6 mobile-large:w-6
                               flex-shrink-0 rounded-full ring-2 ring-white shadow-sm"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-text-primary">
                      {theme.emoji} {theme.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;