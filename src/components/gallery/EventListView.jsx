import { motion } from "framer-motion";
import { MapPin, Clock, Tag } from "lucide-react";
import { eventsData, eventCategories } from "@/data/events";
import { formatDate } from "@/utils/helpers";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const categoryColors = {
  academic: "bg-red-100 text-red-700",
  cultural: "bg-green-100 text-green-700",
  sports: "bg-blue-100 text-blue-700",
  holidays: "bg-yellow-100 text-yellow-700",
};

const EventListView = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4 mobile-large:space-y-5"
    >
      {eventsData.map((event) => (
        <motion.div
          key={event.id}
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          className="flex gap-4 mobile-large:gap-5 tablet:gap-6
                     rounded-xl mobile-large:rounded-2xl
                     bg-surface p-4 mobile-large:p-5 tablet:p-6
                     shadow-md ring-1 ring-black/5
                     transition-shadow hover:shadow-lg"
        >
          {/* Date Block */}
          <div className="flex-shrink-0
                          flex flex-col items-center justify-center
                          h-16 w-16
                          mobile-large:h-20 mobile-large:w-20
                          tablet:h-24 tablet:w-24
                          rounded-xl mobile-large:rounded-2xl
                          bg-gradient-to-br from-primary to-secondary
                          text-white">
            <span className="text-lg mobile-large:text-2xl tablet:text-3xl
                             font-bold leading-none">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-[9px] mobile-large:text-[10px] tablet:text-xs
                             font-medium uppercase mt-0.5">
              {new Date(event.date).toLocaleString("en", { month: "short" })}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Category Badge */}
            <span className={`inline-block rounded-full
                              px-2 py-0.5 mobile-large:px-2.5 mobile-large:py-1
                              text-[9px] mobile-large:text-[10px] tablet:text-xs
                              font-semibold capitalize
                              ${categoryColors[event.category] || "bg-gray-100 text-gray-700"}`}>
              {event.category}
            </span>

            <h3 className="mt-1.5 mobile-large:mt-2
                           font-heading text-sm
                           mobile-large:text-base tablet:text-lg
                           font-bold text-text-primary
                           line-clamp-1">
              {event.title}
            </h3>

            <p className="mt-1 text-[10px] mobile-large:text-xs tablet:text-sm
                          text-text-secondary line-clamp-2">
              {event.description}
            </p>

            {/* Meta */}
            <div className="mt-2 mobile-large:mt-3
                            flex flex-wrap items-center
                            gap-3 mobile-large:gap-4">
              <span className="flex items-center gap-1
                               text-[9px] mobile-large:text-[10px] tablet:text-xs
                               text-text-secondary">
                <MapPin className="h-3 w-3" />
                {event.location}
              </span>
              <span className="flex items-center gap-1
                               text-[9px] mobile-large:text-[10px] tablet:text-xs
                               text-text-secondary">
                <Clock className="h-3 w-3" />
                {event.time}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EventListView;