import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import TextReveal from "@/components/animations/TextReveal";
import { staggerContainer, fadeInUp, fadeInRight } from "@/utils/animations";
import { siteConfig } from "@/config/siteConfig";

const trustBadges = [
  "500+ Happy Students",
  "15+ Years of Excellence",
  "CBSE Affiliated",
];

/* Compact hero masonry images — 2 columns, varied heights */
const heroGridImages = [
  {
    src: "/images/hero/hero-children.png",
    alt: "Classroom learning",
    height: "h-36 mobile-large:h-44 tablet:h-52 laptop:h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=500&fit=crop",
    alt: "Annual day performance",
    height: "h-44 mobile-large:h-52 tablet:h-60 laptop:h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&h=300&fit=crop",
    alt: "Art and craft session",
    height: "h-44 mobile-large:h-52 tablet:h-60 laptop:h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=350&fit=crop",
    alt: "Children in classroom",
    height: "h-36 mobile-large:h-44 tablet:h-52 laptop:h-56",
  },
];

const fallbackEmojis = ["🎨", "🎭", "📚", "🏫"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden
                        pt-0 pb-8
                        mobile-large:pt-1 mobile-large:pb-10
                        phablet:pt-2 phablet:pb-12
                        tablet:pt-3 tablet:pb-16
                        laptop:pt-4 laptop:pb-20
                        desktop:pt-6 desktop:pb-24
                        desktop-large:pt-8 desktop-large:pb-28">
      {/* Background Decorative Blobs */}
      <div className="absolute -right-32 -top-32
                      h-64 w-64 mobile-large:h-80 mobile-large:w-80
                      tablet:h-[500px] tablet:w-[500px]
                      desktop:h-[600px] desktop:w-[600px]
                      rounded-full bg-primary/10
                      animate-blob-morph blur-3xl" />
      <div className="absolute -bottom-32 -left-32
                      h-64 w-64 mobile-large:h-80 mobile-large:w-80
                      tablet:h-[400px] tablet:w-[400px]
                      rounded-full bg-secondary/10
                      animate-blob-morph blur-3xl"
           style={{ animationDelay: "4s" }} />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 laptop:grid-cols-2
                        gap-8 mobile-large:gap-10
                        tablet:gap-12 laptop:gap-16
                        desktop:gap-20
                        items-center">
          {/* ── Left Side: Text Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="surface" className="mb-4 mobile-large:mb-5 tablet:mb-6">
                🌟 #1 Pre-School in {siteConfig.address.city}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading
                         text-3xl leading-tight
                         mini:text-[28px]
                         mobile:text-[32px]
                         mobile-large:text-4xl
                         phablet:text-[42px]
                         tablet:text-5xl
                         laptop:text-[52px]
                         desktop:text-6xl
                         desktop-large:text-[68px]
                         wide:text-7xl
                         font-bold text-text-primary"
            >
              <TextReveal text="Where Little Minds" />
              <br />
              <span className="text-gradient">
                <TextReveal text="Bloom & Grow" delay={0.4} />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 mobile-large:mt-5 tablet:mt-6
                         text-sm mobile-large:text-base
                         phablet:text-lg tablet:text-xl
                         desktop:text-[22px]
                         text-text-secondary leading-relaxed
                         max-w-md mobile-large:max-w-lg
                         tablet:max-w-xl desktop:max-w-2xl"
            >
              Nurturing curious minds from Play School to UKG with love,
              creativity, and world-class education.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 mobile-large:mt-8 tablet:mt-10
                         flex flex-col mini:flex-col
                         mobile-large:flex-row
                         gap-3 mobile-large:gap-4"
            >
              <Link to="/admissions">
                <Button size="lg" className="w-full mobile-large:w-auto">
                  🎓 Enroll Now
                  <ArrowRight className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full mobile-large:w-auto"
              >
                <Play className="h-4 w-4 mobile-large:h-5 mobile-large:w-5" />
                Virtual Tour
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 mobile-large:mt-8 tablet:mt-10
                         flex flex-col mini:flex-col
                         mobile-large:flex-row mobile-large:flex-wrap
                         gap-2 mobile-large:gap-3 tablet:gap-4"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 mobile-large:gap-2
                             text-xs mobile-large:text-sm tablet:text-base
                             text-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                           text-secondary flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Side: Pinterest Masonry Grid ── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative mt-6 laptop:mt-0"
          >
            <div className="grid grid-cols-2
                            gap-3 mobile-large:gap-4
                            max-w-sm mobile-large:max-w-md
                            phablet:max-w-lg tablet:max-w-xl
                            laptop:max-w-none
                            mx-auto laptop:mx-0">
              {/* Column 1 — offset top */}
              <div className="flex flex-col gap-3 mobile-large:gap-4
                              pt-6 mobile-large:pt-8 tablet:pt-10">
                {heroGridImages.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className={`relative group overflow-hidden
                                rounded-2xl mobile-large:rounded-3xl
                                ring-1 ring-black/5
                                shadow-md hover:shadow-xl
                                transition-shadow duration-300
                                ${img.height}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover
                                 transition-transform duration-700 ease-out
                                 group-hover:scale-110"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add(
                          "bg-primary/10", "flex", "items-center", "justify-center"
                        );
                        const span = document.createElement("span");
                        span.textContent = fallbackEmojis[i];
                        span.className = "text-4xl tablet:text-5xl";
                        e.target.parentElement.appendChild(span);
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0
                                    bg-gradient-to-t from-black/40 to-transparent
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300
                                    flex items-end p-3 mobile-large:p-4">
                      <span className="text-[10px] mobile-large:text-xs
                                       font-medium text-white drop-shadow-md">
                        {img.alt}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2 — flush top */}
              <div className="flex flex-col gap-3 mobile-large:gap-4">
                {heroGridImages.slice(2, 4).map((img, i) => (
                  <motion.div
                    key={i + 2}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.15, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className={`relative group overflow-hidden
                                rounded-2xl mobile-large:rounded-3xl
                                ring-1 ring-black/5
                                shadow-md hover:shadow-xl
                                transition-shadow duration-300
                                ${img.height}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover
                                 transition-transform duration-700 ease-out
                                 group-hover:scale-110"
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add(
                          "bg-secondary/10", "flex", "items-center", "justify-center"
                        );
                        const span = document.createElement("span");
                        span.textContent = fallbackEmojis[i + 2];
                        span.className = "text-4xl tablet:text-5xl";
                        e.target.parentElement.appendChild(span);
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0
                                    bg-gradient-to-t from-black/40 to-transparent
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300
                                    flex items-end p-3 mobile-large:p-4">
                      <span className="text-[10px] mobile-large:text-xs
                                       font-medium text-white drop-shadow-md">
                        {img.alt}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;