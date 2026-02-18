import { motion } from "framer-motion";
import { Heart, Eye, Target, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import { siteConfig } from "@/config/siteConfig";

const coreValues = [
  { icon: Heart, label: "Love", color: "text-red-500 bg-red-50" },
  { icon: Eye, label: "Safety", color: "text-blue-500 bg-blue-50" },
  { icon: Sparkles, label: "Creativity", color: "text-purple-500 bg-purple-50" },
  { icon: Target, label: "Excellence", color: "text-green-500 bg-green-50" },
];

const yearsOfExcellence = new Date().getFullYear() - (siteConfig.foundedYear || 2010);

const OurStory = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 laptop:grid-cols-2
                        gap-8 mobile-large:gap-10
                        tablet:gap-12 laptop:gap-16
                        desktop:gap-20
                        items-center">
          {/* ── Left: Image ── */}
          <SlideIn direction="left">
            <div className="relative pb-6 pr-6
                            mobile-large:pb-8 mobile-large:pr-8">
              <div className="aspect-[4/3] rounded-2xl
                              mobile-large:rounded-3xl
                              overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
                  alt="Children learning at Little Bloomers preschool"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br", "from-primary/20", "to-secondary/20",
                      "flex", "items-center", "justify-center"
                    );
                    const emoji = document.createElement("span");
                    emoji.textContent = "🏫";
                    emoji.className = "text-6xl mobile-large:text-7xl tablet:text-8xl";
                    e.target.parentElement.appendChild(emoji);
                  }}
                />
              </div>

              {/* Floating badge – positioned within padding area to avoid overlap */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-0 right-0
                           bg-surface rounded-xl mobile-large:rounded-2xl
                           p-3 mobile-large:p-4 tablet:p-5
                           shadow-lg ring-1 ring-black/5"
              >
                <p className="text-2xl mobile-large:text-3xl
                              tablet:text-4xl font-bold
                              font-heading text-primary">
                  {yearsOfExcellence}+
                </p>
                <p className="text-[10px] mobile-large:text-xs
                              tablet:text-sm text-text-secondary
                              font-medium">
                  Years of Excellence
                </p>
              </motion.div>
            </div>
          </SlideIn>

          {/* ── Right: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs mobile-large:text-sm
                         font-semibold text-primary uppercase tracking-wider"
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-2 mobile-large:mt-3
                         font-heading text-2xl
                         mobile-large:text-3xl
                         tablet:text-4xl
                         desktop:text-[42px]
                         font-bold text-text-primary leading-tight"
            >
              Founded in {siteConfig.foundedYear} with a{" "}
              <span className="text-gradient">Dream to Transform</span>{" "}
              Early Education
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 mobile-large:mt-5
                         text-sm mobile-large:text-base tablet:text-lg
                         text-text-secondary leading-relaxed"
            >
              What started as a small initiative with just 20 students has
              blossomed into one of the most trusted pre-schools in{" "}
              {siteConfig.address.city}. Our founder, Mrs. Anita Desai,
              envisioned a place where every child feels safe, loved, and
              inspired to learn.
            </motion.p>

            {/* Vision & Mission */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 mobile-large:mt-8
                         space-y-4 mobile-large:space-y-5"
            >
              <div className="rounded-xl mobile-large:rounded-2xl
                              bg-primary/5 p-4 mobile-large:p-5 tablet:p-6">
                <h3 className="font-heading text-base
                               mobile-large:text-lg tablet:text-xl
                               font-bold text-text-primary">
                  🔭 Our Vision
                </h3>
                <p className="mt-1.5 mobile-large:mt-2
                              text-xs mobile-large:text-sm tablet:text-base
                              text-text-secondary leading-relaxed">
                  To create a joyful learning environment where every child
                  discovers their unique potential and develops a lifelong
                  love for learning.
                </p>
              </div>

              <div className="rounded-xl mobile-large:rounded-2xl
                              bg-secondary/5 p-4 mobile-large:p-5 tablet:p-6">
                <h3 className="font-heading text-base
                               mobile-large:text-lg tablet:text-xl
                               font-bold text-text-primary">
                  🎯 Our Mission
                </h3>
                <p className="mt-1.5 mobile-large:mt-2
                              text-xs mobile-large:text-sm tablet:text-base
                              text-text-secondary leading-relaxed">
                  To develop each child's intellectual, emotional, social,
                  and physical abilities through innovative, play-based
                  education methods.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 mobile-large:mt-8"
            >
              <h3 className="text-sm mobile-large:text-base
                             font-semibold text-text-primary mb-3 mobile-large:mb-4">
                Core Values
              </h3>
              <div className="flex flex-wrap gap-2 mobile-large:gap-3">
                {coreValues.map((value) => (
                  <span
                    key={value.label}
                    className={`inline-flex items-center gap-1.5 mobile-large:gap-2
                                rounded-full px-3 py-1.5
                                mobile-large:px-4 mobile-large:py-2
                                text-xs mobile-large:text-sm
                                font-medium ${value.color}`}
                  >
                    <value.icon className="h-3.5 w-3.5 mobile-large:h-4 mobile-large:w-4" />
                    {value.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;