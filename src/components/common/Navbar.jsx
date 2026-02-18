import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "@/config/navigationConfig";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface/80 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="container-main">
          <div
            className="flex h-14
                        mobile-large:h-16
                        tablet:h-18
                        laptop:h-20
                        items-center justify-between"
          >
            {/* ── Logo ── */}
            <Logo />

            {/* ── Desktop Nav Links ── */}
            <div className="hidden laptop:flex items-center gap-1 desktop:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "relative rounded-lg px-3 py-2 desktop:px-4",
                      "text-sm desktop:text-base font-medium font-subheading",
                      "transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ── Right Side ── */}
            <div className="flex items-center gap-2 mobile-large:gap-3">
              <ThemeSwitcher />

              {/* Enroll CTA - Hidden below tablet */}
              <Link
                to="/admissions"
                className="hidden tablet:inline-flex items-center
                           rounded-full bg-primary px-4 py-2
                           tablet-large:px-5 tablet-large:py-2.5
                           desktop:px-6
                           text-xs tablet-large:text-sm font-bold
                           text-text-primary shadow-md
                           transition-all hover:shadow-lg hover:scale-105
                           active:scale-95"
              >
                🎓 Enroll Now
              </Link>

              {/* Hamburger - Shown below laptop */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="flex laptop:hidden items-center justify-center
                           h-9 w-9 mobile-large:h-10 mobile-large:w-10
                           rounded-xl bg-surface shadow-md
                           transition-transform active:scale-90"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-text-primary" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileDrawer onClose={() => setIsMobileOpen(false)} />
        )}
      </AnimatePresence>

      {/* ── Spacer for fixed header ── */}
      <div
        className="h-14
                    mobile-large:h-16
                    tablet:h-18
                    laptop:h-20"
      />
    </>
  );
};

export default Navbar;