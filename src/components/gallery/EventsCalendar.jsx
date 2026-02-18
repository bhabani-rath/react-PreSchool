import { useState } from "react";
import { Calendar, List } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import EventListView from "./EventListView";
import CalendarView from "./CalendarView";
import { cn } from "@/utils/cn";

const EventsCalendar = () => {
  const [view, setView] = useState("list");

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Events Calendar 📅"
          subtitle="Stay updated with our upcoming events and celebrations"
        />

        {/* View Toggle */}
        <div className="flex items-center justify-center gap-2
                        mb-6 mobile-large:mb-8 tablet:mb-10">
          <button
            onClick={() => setView("list")}
            className={cn(
              "flex items-center gap-2 rounded-xl",
              "px-4 py-2 mobile-large:px-5 mobile-large:py-2.5",
              "text-xs mobile-large:text-sm font-medium",
              "transition-all",
              view === "list"
                ? "bg-primary text-white shadow-md"
                : "bg-surface text-text-secondary ring-1 ring-black/5"
            )}
          >
            <List className="h-4 w-4" />
            List View
          </button>
          <button
            onClick={() => setView("calendar")}
            className={cn(
              "flex items-center gap-2 rounded-xl",
              "px-4 py-2 mobile-large:px-5 mobile-large:py-2.5",
              "text-xs mobile-large:text-sm font-medium",
              "transition-all",
              view === "calendar"
                ? "bg-primary text-white shadow-md"
                : "bg-surface text-text-secondary ring-1 ring-black/5"
            )}
          >
            <Calendar className="h-4 w-4" />
            Calendar View
          </button>
        </div>

        {/* Views */}
        {view === "list" ? (
          <EventListView />
        ) : (
          <CalendarView />
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;