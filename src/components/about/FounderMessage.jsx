import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { fadeInUp } from "@/utils/animations";

const FounderMessage = () => {
  return (
    <section className="section-padding
                        bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-narrow">
        <FadeIn>
          <div className="relative rounded-2xl mobile-large:rounded-3xl
                          bg-surface p-6 mobile-large:p-8
                          tablet:p-10 laptop:p-12
                          desktop:p-16
                          shadow-xl ring-1 ring-black/5
                          text-center">
            {/* Quote Icon */}
            <Quote className="mx-auto mb-4 mobile-large:mb-5 tablet:mb-6
                              h-8 w-8 mobile-large:h-10 mobile-large:w-10
                              tablet:h-12 tablet:w-12
                              text-primary/30" />

            {/* Photo */}
            <div className="mx-auto mb-4 mobile-large:mb-5 tablet:mb-6
                            h-20 w-20 mobile-large:h-24 mobile-large:w-24
                            tablet:h-28 tablet:w-28
                            rounded-full overflow-hidden
                            ring-4 ring-primary/20
                            shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face"
                alt="Mrs. Anita Desai — Founder & Director"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-gradient-to-br", "from-primary/20", "to-secondary/20",
                    "flex", "items-center", "justify-center"
                  );
                  const span = document.createElement("span");
                  span.textContent = "👩‍💼";
                  span.className = "text-3xl mobile-large:text-4xl tablet:text-5xl";
                  e.target.parentElement.appendChild(span);
                }}
              />
            </div>

            {/* Quote Text */}
            <blockquote className="font-subheading text-base
                                   mobile-large:text-lg
                                   phablet:text-xl
                                   tablet:text-2xl
                                   laptop:text-[26px]
                                   desktop:text-3xl
                                   leading-relaxed text-text-primary
                                   italic">
              "Every child is a unique flower in the garden of life. Our job
              is not to shape them into what we want, but to nurture them
              into who they are meant to be."
            </blockquote>

            {/* Author */}
            <div className="mt-5 mobile-large:mt-6 tablet:mt-8">
              <p className="font-heading text-base
                            mobile-large:text-lg tablet:text-xl
                            font-bold text-text-primary">
                Mrs. Anita Desai
              </p>
              <p className="text-xs mobile-large:text-sm tablet:text-base
                            text-text-secondary">
                Founder & Director
              </p>
              <p className="text-[10px] mobile-large:text-xs tablet:text-sm
                            text-text-secondary/70">
                M.Ed, Child Psychology Specialist
              </p>
            </div>

            {/* Decorative dots */}
            <div className="absolute -left-3 -top-3
                            mobile-large:-left-4 mobile-large:-top-4
                            h-6 w-6 mobile-large:h-8 mobile-large:w-8
                            rounded-full bg-primary/20" />
            <div className="absolute -bottom-3 -right-3
                            mobile-large:-bottom-4 mobile-large:-right-4
                            h-6 w-6 mobile-large:h-8 mobile-large:w-8
                            rounded-full bg-accent/20" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FounderMessage;