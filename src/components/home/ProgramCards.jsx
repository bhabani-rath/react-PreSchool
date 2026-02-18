import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Card from "@/components/ui/Card";
import { programsData } from "@/data/programs";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const ProgramCards = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Our Learning Programs"
          subtitle="Age-appropriate curriculum designed for every developmental stage"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5
                     tablet:gap-6 desktop:gap-8"
        >
          {programsData.map((program) => (
            <motion.div key={program.id} variants={fadeInUp}>
              <Card
                className="group relative overflow-hidden
                           h-full flex flex-col"
                padding={false}
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />

                <div className="flex flex-col flex-1
                                p-4 mobile-large:p-5
                                tablet:p-6 desktop:p-7">
                  {/* Icon */}
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="mb-3 mobile-large:mb-4
                               text-3xl mobile-large:text-4xl
                               tablet:text-5xl"
                  >
                    {program.icon}
                  </motion.span>

                  {/* Title & Age */}
                  <h3 className="font-heading text-lg
                                 mobile-large:text-xl
                                 tablet:text-2xl
                                 font-bold text-text-primary">
                    {program.title}
                  </h3>
                  <span className="mt-1
                                   text-xs mobile-large:text-sm
                                   font-medium text-primary">
                    Age: {program.age}
                  </span>

                  {/* Highlights */}
                  <ul className="mt-3 mobile-large:mt-4
                                 space-y-1.5 mobile-large:space-y-2
                                 flex-1">
                    {program.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2
                                   text-xs mobile-large:text-sm
                                   text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/programs?tab=${program.id}`}
                    className="mt-4 mobile-large:mt-5
                               inline-flex items-center gap-1.5
                               text-xs mobile-large:text-sm
                               font-semibold text-primary
                               group-hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5
                                           mobile-large:h-4 mobile-large:w-4
                                           transition-transform
                                           group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramCards;