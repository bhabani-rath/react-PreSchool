import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const methods = [
  {
    icon: "🎮",
    title: "Play-Based Learning",
    description: "Children learn best when they are having fun. Our play-based approach makes every lesson an adventure.",
  },
  {
    icon: "🧩",
    title: "Montessori Methods",
    description: "Self-directed learning with hands-on materials that build independence and critical thinking.",
  },
  {
    icon: "📚",
    title: "Storytelling Approach",
    description: "Stories spark imagination and teach values. We use narratives to make concepts memorable.",
  },
  {
    icon: "🎨",
    title: "Arts Integration",
    description: "Art, music, and dance are woven into academics to develop creativity and self-expression.",
  },
  {
    icon: "🧪",
    title: "STEAM Education",
    description: "Age-appropriate science, technology, engineering, arts, and math activities build future-ready skills.",
  },
  {
    icon: "🌍",
    title: "Experiential Learning",
    description: "Field trips, nature walks, and hands-on experiments make learning real and meaningful.",
  },
];

const TeachingMethodology = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Our Teaching Methodology"
          subtitle="A multi-faceted approach to early childhood education"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-3
                     gap-4 mobile-large:gap-5
                     tablet:gap-6 desktop:gap-8"
        >
          {methods.map((method, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group rounded-2xl mobile-large:rounded-3xl
                         bg-surface p-5 mobile-large:p-6
                         tablet:p-7 desktop:p-8
                         shadow-md ring-1 ring-black/5
                         transition-all duration-300
                         hover:shadow-xl hover:ring-primary/20"
            >
              {/* Icon with draw animation */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-3 mobile-large:mb-4
                           flex h-12 w-12
                           mobile-large:h-14 mobile-large:w-14
                           tablet:h-16 tablet:w-16
                           items-center justify-center
                           rounded-2xl bg-primary/10
                           text-2xl mobile-large:text-3xl tablet:text-4xl
                           group-hover:bg-primary/20
                           transition-colors duration-300"
              >
                {method.icon}
              </motion.div>

              <h3 className="font-heading text-base
                             mobile-large:text-lg tablet:text-xl
                             font-bold text-text-primary">
                {method.title}
              </h3>

              <p className="mt-2 mobile-large:mt-3
                            text-xs mobile-large:text-sm tablet:text-base
                            leading-relaxed text-text-secondary">
                {method.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingMethodology;