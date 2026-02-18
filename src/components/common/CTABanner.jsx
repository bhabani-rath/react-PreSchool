import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Phone } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import Button from "./Button";

const CTABanner = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl
                     mobile-large:rounded-3xl
                     bg-gradient-to-r from-primary via-primary/90 to-primary/80
                     px-5 py-10
                     mobile-large:px-8 mobile-large:py-12
                     phablet:px-10 phablet:py-14
                     tablet:px-14 tablet:py-16
                     laptop:px-16 laptop:py-20
                     desktop:px-20 desktop:py-24
                     text-center"
        >
          {/* Decorative floating elements */}
          <div className="absolute -left-10 -top-10
                          h-32 w-32 mobile-large:h-40 mobile-large:w-40
                          tablet:h-56 tablet:w-56
                          rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -right-10
                          h-32 w-32 mobile-large:h-40 mobile-large:w-40
                          tablet:h-56 tablet:w-56
                          rounded-full bg-white/10 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                          h-48 w-48 tablet:h-72 tablet:w-72
                          rounded-full bg-white/5 blur-3xl" />

          {/* Floating emojis */}
          <motion.span
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[20%]
                       text-2xl mobile-large:text-3xl tablet:text-4xl
                       opacity-30"
          >
            🎈
          </motion.span>
          <motion.span
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[15%]
                       text-2xl mobile-large:text-3xl tablet:text-4xl
                       opacity-30"
          >
            ⭐
          </motion.span>
          <motion.span
            animate={{ y: [-8, 12, -8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[20%]
                       text-2xl mobile-large:text-3xl tablet:text-4xl
                       opacity-30"
          >
            🎓
          </motion.span>

          {/* Content */}
          <div className="relative z-10">
            <motion.span
              variants={fadeInUp}
              className="mb-3 mobile-large:mb-4
                         inline-block rounded-full
                         bg-white/20 px-4 py-1.5
                         mobile-large:px-5 mobile-large:py-2
                         text-xs mobile-large:text-sm
                         font-semibold text-white backdrop-blur-sm"
            >
              🎓 Admissions Open 2025-26
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-heading text-2xl
                         mobile-large:text-3xl
                         phablet:text-4xl
                         tablet:text-[42px]
                         laptop:text-5xl
                         desktop:text-[56px]
                         font-bold text-white
                         leading-tight"
            >
              Give Your Child the
              <br className="hidden phablet:block" />
              Best Start in Life
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 mobile-large:mt-4 tablet:mt-5
                         max-w-md mobile-large:max-w-lg tablet:max-w-xl
                         text-sm mobile-large:text-base tablet:text-lg
                         text-white/80"
            >
              Limited seats available. Enroll today and watch your little one
              bloom into a confident, curious learner.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 mobile-large:mt-8 tablet:mt-10
                         flex flex-col
                         mini:flex-col
                         mobile-large:flex-row
                         items-center justify-center
                         gap-3 mobile-large:gap-4"
            >
              <Link to="/admissions">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mobile-large:w-auto
                             bg-white text-text-primary
                             hover:shadow-xl hover:shadow-white/30"
                >
                  Apply Now 🎓
                </Button>
              </Link>

              <a href="/downloads/admission-brochure.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full mobile-large:w-auto
                             border-white text-white
                             hover:bg-white hover:text-text-primary"
                >
                  <Download className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                  Download Brochure
                </Button>
              </a>

              <a href="tel:+919876543210">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full mobile-large:w-auto
                             text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                  Call Us
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;