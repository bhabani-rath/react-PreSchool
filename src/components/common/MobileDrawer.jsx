import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { X, Phone, Mail } from "lucide-react";
import { navLinks } from "@/config/navigationConfig";
import { siteConfig } from "@/config/siteConfig";
import { slideInFromLeft } from "@/utils/animations";
import { cn } from "@/utils/cn";

const MobileDrawer = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] laptop:hidden"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <motion.div
        variants={slideInFromLeft}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute left-0 top-0 h-full
                   w-[280px] mobile:w-[300px] mobile-large:w-[320px]
                   phablet:w-[360px] tablet:w-[400px]
                   bg-surface shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/5
                        px-4 mobile-large:px-6 py-4 mobile-large:py-5">
          <span className="font-heading text-lg mobile-large:text-xl font-bold text-text-primary">
            🏫 {siteConfig.schoolName}
          </span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 mobile-large:h-10 mobile-large:w-10
                       items-center justify-center rounded-xl
                       bg-background transition-colors hover:bg-accent/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-text-primary" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 p-3 mobile-large:p-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <NavLink
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-xl",
                    "px-4 py-3 mobile-large:py-3.5",
                    "text-sm mobile-large:text-base font-medium font-subheading",
                    "transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-background hover:text-text-primary"
                  )
                }
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="mt-auto border-t border-black/5 p-4 mobile-large:p-6">
          <a
            href={`tel:${siteConfig.phone[0]}`}
            className="flex items-center gap-3 py-2 text-xs mobile-large:text-sm text-text-secondary"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone[0]}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 py-2 text-xs mobile-large:text-sm text-text-secondary"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>

          <Link
            to="/admissions"
            onClick={onClose}
            className="mt-4 flex w-full items-center justify-center
                       rounded-full bg-primary
                       px-6 py-3 mobile-large:py-3.5
                       text-sm mobile-large:text-base font-bold
                       text-text-primary shadow-md
                       transition-all active:scale-95"
          >
            🎓 Enroll Now
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileDrawer;