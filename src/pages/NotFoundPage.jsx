import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEOHead, { seoConfig } from "@/config/seoConfig";
import Button from "@/components/common/Button";
import PageTransition from "@/layouts/PageTransition";

const NotFoundPage = () => {
  const seo = seoConfig.notFound;

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} noIndex />
      <section className="flex min-h-[70vh]
                          items-center justify-center
                          section-padding">
        <div className="container-main text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <span className="text-7xl
                             mobile-large:text-8xl
                             tablet:text-9xl
                             desktop:text-[150px]">
              🤔
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 mobile-large:mt-6
                       font-heading text-5xl
                       mobile-large:text-6xl
                       tablet:text-7xl
                       desktop:text-8xl
                       font-bold text-gradient"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 mobile-large:mt-3
                       font-heading text-xl
                       mobile-large:text-2xl
                       tablet:text-3xl
                       desktop:text-4xl
                       font-bold text-text-primary"
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 mobile-large:mt-4
                       text-sm mobile-large:text-base
                       tablet:text-lg
                       text-text-secondary
                       max-w-md mx-auto"
          >
            It seems like the little explorer wandered off the path!
            Let's get you back to a familiar place.
          </motion.p>

          {/* Floating decorative elements */}
          <div className="relative mt-6 mobile-large:mt-8 inline-block">
            <motion.span
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -left-8 -top-4
                         mobile-large:-left-12 mobile-large:-top-6
                         text-xl mobile-large:text-2xl
                         tablet:text-3xl opacity-40"
            >
              📚
            </motion.span>
            <motion.span
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-8 -top-2
                         mobile-large:-right-12 mobile-large:-top-4
                         text-xl mobile-large:text-2xl
                         tablet:text-3xl opacity-40"
            >
              🎨
            </motion.span>
            <motion.span
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2
                         text-xl mobile-large:text-2xl
                         tablet:text-3xl opacity-40"
            >
              🖍️
            </motion.span>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 mobile-large:mt-10 tablet:mt-12
                       flex flex-col mobile-large:flex-row
                       items-center justify-center
                       gap-3 mobile-large:gap-4"
          >
            <Link to="/">
              <Button size="lg" className="w-full mobile-large:w-auto">
                <Home className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                Go Home
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button
                variant="outline"
                size="lg"
                className="w-full mobile-large:w-auto"
              >
                <ArrowLeft className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                Go Back
              </Button>
            </button>
          </motion.div>

          {/* Fun message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 mobile-large:mt-12
                       text-xs mobile-large:text-sm
                       text-text-secondary/50 font-fun"
          >
            🌟 Fun Fact: Even our little students know their way around
            better than this page! 😄
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFoundPage;