import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { eventsData } from "@/data/events";
import { formatDate } from "@/utils/helpers";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const UpcomingEvents = () => {
  const upcomingEvents = eventsData.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Upcoming Events & Celebrations 🎉"
          subtitle="Fun activities and events lined up for our little ones"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="rounded-2xl mobile-large:rounded-3xl
                         bg-surface overflow-hidden
                         shadow-md ring-1 ring-black/5
                         transition-shadow hover:shadow-xl"
            >
              {/* Date Badge */}
              <div className="bg-gradient-to-r from-primary to-primary/80
                              px-4 py-3 mobile-large:px-5 mobile-large:py-4
                              text-center">
                <p className="text-2xl mobile-large:text-3xl
                              tablet:text-4xl
                              font-bold text-white">
                  {new Date(event.date).getDate()}
                </p>
                <p className="text-xs mobile-large:text-sm
                              font-medium text-white/80">
                  {new Date(event.date).toLocaleString("en", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Content */}
              <div className="p-4 mobile-large:p-5 tablet:p-6">
                <h3 className="font-heading text-base
                               mobile-large:text-lg
                               font-bold text-text-primary
                               line-clamp-2">
                  {event.title}
                </h3>
                <p className="mt-2
                              text-xs mobile-large:text-sm
                              text-text-secondary line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-3 mobile-large:mt-4
                                space-y-1.5 mobile-large:space-y-2">
                  <span className="flex items-center gap-1.5
                                   text-[10px] mobile-large:text-xs
                                   text-text-secondary">
                    <MapPin className="h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5
                                   text-[10px] mobile-large:text-xs
                                   text-text-secondary">
                    <Clock className="h-3 w-3 mobile-large:h-3.5 mobile-large:w-3.5" />
                    {event.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 mobile-large:mt-10 tablet:mt-12 text-center"
        >
          <Link to="/gallery">
            <Button variant="outline" size="md">
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;