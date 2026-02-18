import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { fadeInUp } from "@/utils/animations";

const pastEvents = [
  { title: "Annual Day 2024", image: "🎭", date: "Dec 2024" },
  { title: "Diwali Fest 2024", image: "🪔", date: "Nov 2024" },
  { title: "Sports Day 2024", image: "🏅", date: "Oct 2024" },
  { title: "Independence Day", image: "🇮🇳", date: "Aug 2024" },
  { title: "Summer Camp", image: "⛺", date: "May 2024" },
];

const PastEventHighlights = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Past Event Highlights 📸"
          subtitle="Relive our memorable celebrations"
        />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-x-auto scrollbar-none"
      >
        <div className="flex gap-4 mobile-large:gap-5 tablet:gap-6
                        px-4 mobile-large:px-6 tablet:px-8
                        container-main
                        min-w-max">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex-shrink-0
                         w-[220px] mobile-large:w-[260px]
                         tablet:w-[300px] desktop:w-[340px]
                         rounded-xl mobile-large:rounded-2xl
                         overflow-hidden
                         bg-surface shadow-md ring-1 ring-black/5
                         transition-shadow hover:shadow-xl
                         cursor-pointer group"
            >
              <div className="aspect-[3/2]
                              bg-gradient-to-br from-primary/10 to-secondary/10
                              flex items-center justify-center
                              group-hover:scale-105 transition-transform duration-500">
                <span className="text-5xl mobile-large:text-6xl
                                 tablet:text-7xl">
                  {event.image}
                </span>
              </div>
              <div className="p-3 mobile-large:p-4 tablet:p-5">
                <h3 className="text-sm mobile-large:text-base tablet:text-lg
                               font-bold text-text-primary">
                  {event.title}
                </h3>
                <p className="text-[10px] mobile-large:text-xs
                              text-text-secondary mt-1">
                  📅 {event.date}
                </p>
                <span className="mt-2 inline-flex items-center gap-1
                                 text-[10px] mobile-large:text-xs
                                 text-primary font-semibold">
                  View Album
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PastEventHighlights;