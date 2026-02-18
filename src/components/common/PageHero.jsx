import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/utils/animations";

const PageHero = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section
      className="relative overflow-hidden
                  bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10
                  py-12 mobile-large:py-16 phablet:py-20
                  tablet:py-24 laptop:py-28 desktop:py-32"
    >
      {/* Decorative blobs */}
      <div className="absolute -right-20 -top-20 h-60 w-60
                      mobile-large:h-72 mobile-large:w-72
                      tablet:h-96 tablet:w-96
                      rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60
                      mobile-large:h-72 mobile-large:w-72
                      tablet:h-96 tablet:w-96
                      rounded-full bg-accent/10 blur-3xl" />

      <div className="container-main relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-4 mobile-large:mb-6
                       flex items-center gap-1 mobile-large:gap-2
                       text-xs mobile-large:text-sm text-text-secondary"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1 mobile-large:gap-2">
                <ChevronRight className="h-3 w-3 mobile-large:h-4 mobile-large:w-4" />
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-text-primary font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-3xl
                     mobile-large:text-4xl
                     phablet:text-[42px]
                     tablet:text-5xl
                     laptop:text-[56px]
                     desktop:text-6xl
                     desktop-large:text-[64px]
                     font-bold text-text-primary
                     leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mt-3 mobile-large:mt-4 tablet:mt-5
                       text-base mobile-large:text-lg tablet:text-xl
                       text-text-secondary
                       max-w-lg tablet:max-w-xl desktop:max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;