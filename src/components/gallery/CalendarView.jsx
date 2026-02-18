import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";
import { eventsData } from "@/data/events";
import { cn } from "@/utils/cn";

const categoryColors = {
  academic: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
  cultural: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500" },
  sports: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  holidays: { bg: "bg-yellow-100", text: "text-yellow-700", dot: "bg-yellow-500" },
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CalendarView = () => {
  const today = new Date();
  const [year, setYear] = useState(2025); // events are in 2025
  const [month, setMonth] = useState(0);  // Jan
  const [selectedDate, setSelectedDate] = useState(null);

  /* Build a map: "YYYY-MM-DD" → [events] */
  const eventMap = useMemo(() => {
    const map = {};
    eventsData.forEach((ev) => {
      const key = ev.date; // already "YYYY-MM-DD"
      if (!map[key]) map[key] = [];
      map[key].push(ev);
    });
    return map;
  }, []);

  /* Calendar grid for the current month */
  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells = [];

    // Previous month trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      cells.push({ day: daysInPrevMonth - i, currentMonth: false });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({
        day: d,
        currentMonth: true,
        dateStr,
        events: eventMap[dateStr] || [],
      });
    }

    // Next month leading days (fill to 42 for 6 rows)
    const remaining = 42 - cells.length;
    for (let i = 1; i <= remaining; i++) {
      cells.push({ day: i, currentMonth: false });
    }

    return cells;
  }, [year, month, eventMap]);

  /* Selected day's events */
  const selectedEvents = selectedDate ? (eventMap[selectedDate] || []) : [];

  const goToPrev = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
    setSelectedDate(null);
  };

  const goToNext = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
    setSelectedDate(null);
  };

  return (
    <div className="rounded-2xl mobile-large:rounded-3xl
                    bg-surface shadow-md ring-1 ring-black/5
                    overflow-hidden">
      {/* ── Header — Month / Year + Arrows ── */}
      <div className="flex items-center justify-between
                      px-4 py-3 mobile-large:px-6 mobile-large:py-4
                      tablet:px-8 tablet:py-5
                      bg-primary/5">
        <button
          onClick={goToPrev}
          className="p-1.5 mobile-large:p-2
                     rounded-xl hover:bg-primary/10
                     transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-text-primary" />
        </button>

        <h3 className="font-heading text-base mobile-large:text-lg
                       tablet:text-xl font-bold text-text-primary">
          {MONTHS[month]} {year}
        </h3>

        <button
          onClick={goToNext}
          className="p-1.5 mobile-large:p-2
                     rounded-xl hover:bg-primary/10
                     transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-text-primary" />
        </button>
      </div>

      {/* ── Day Headers ── */}
      <div className="grid grid-cols-7
                      px-2 mobile-large:px-4 tablet:px-6
                      pt-3 mobile-large:pt-4">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] mobile-large:text-xs
                                   font-semibold text-text-secondary
                                   py-1.5 mobile-large:py-2">
            {d}
          </div>
        ))}
      </div>

      {/* ── Calendar Grid ── */}
      <div className="grid grid-cols-7
                      px-2 mobile-large:px-4 tablet:px-6
                      pb-4 mobile-large:pb-6
                      gap-px mobile-large:gap-0.5">
        {calendarDays.map((cell, i) => {
          const hasEvents = cell.events?.length > 0;
          const isSelected = cell.dateStr && cell.dateStr === selectedDate;
          const isToday =
            cell.currentMonth &&
            cell.day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <button
              key={i}
              onClick={() => {
                if (cell.currentMonth && cell.dateStr) {
                  setSelectedDate(isSelected ? null : cell.dateStr);
                }
              }}
              disabled={!cell.currentMonth}
              className={cn(
                "relative flex flex-col items-center justify-start",
                "py-1.5 mobile-large:py-2 tablet:py-2.5",
                "rounded-lg mobile-large:rounded-xl",
                "text-xs mobile-large:text-sm",
                "transition-all duration-200",
                "min-h-[40px] mobile-large:min-h-[48px] tablet:min-h-[56px]",
                !cell.currentMonth && "opacity-30 cursor-default",
                cell.currentMonth && "hover:bg-primary/5 cursor-pointer",
                isSelected && "bg-primary/15 ring-2 ring-primary",
                isToday && !isSelected && "bg-secondary/10 font-bold"
              )}
            >
              <span className={cn(
                "leading-none",
                hasEvents ? "font-bold text-text-primary" : "text-text-secondary",
                isToday && "text-primary",
              )}>
                {cell.day}
              </span>

              {/* Event dots */}
              {hasEvents && (
                <div className="flex gap-0.5 mt-1">
                  {cell.events.slice(0, 3).map((ev, j) => {
                    const cat = categoryColors[ev.category] || categoryColors.academic;
                    return (
                      <span
                        key={j}
                        className={cn(
                          "h-1.5 w-1.5 mobile-large:h-2 mobile-large:w-2",
                          "rounded-full",
                          cat.dot
                        )}
                      />
                    );
                  })}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Category Legend ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 mobile-large:gap-4
                      px-4 pb-4 mobile-large:pb-5">
        {Object.entries(categoryColors).map(([key, val]) => (
          <span key={key} className="flex items-center gap-1.5
                                    text-[9px] mobile-large:text-[10px] tablet:text-xs
                                    text-text-secondary capitalize">
            <span className={cn("h-2 w-2 rounded-full", val.dot)} />
            {key}
          </span>
        ))}
      </div>

      {/* ── Selected Day Detail Panel ── */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-black/5"
          >
            <div className="px-4 mobile-large:px-6 tablet:px-8
                            py-4 mobile-large:py-5 tablet:py-6
                            bg-primary/2">
              <p className="text-xs mobile-large:text-sm font-semibold
                           text-text-primary mb-3">
                {new Date(selectedDate).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              {selectedEvents.length === 0 ? (
                <p className="text-xs mobile-large:text-sm text-text-secondary italic">
                  No events on this day
                </p>
              ) : (
                <div className="space-y-3">
                  {selectedEvents.map((ev) => {
                    const cat = categoryColors[ev.category] || categoryColors.academic;
                    return (
                      <motion.div
                        key={ev.id}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex gap-3 mobile-large:gap-4
                                   rounded-xl mobile-large:rounded-2xl
                                   bg-surface p-3 mobile-large:p-4
                                   shadow-sm ring-1 ring-black/5"
                      >
                        <div className={cn(
                          "shrink-0 h-10 w-10 mobile-large:h-12 mobile-large:w-12",
                          "rounded-xl flex items-center justify-center",
                          cat.bg
                        )}>
                          <span className={cn("text-sm mobile-large:text-base font-bold", cat.text)}>
                            {new Date(ev.date).getDate()}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className={cn(
                            "inline-block rounded-full px-2 py-0.5",
                            "text-[8px] mobile-large:text-[9px] font-semibold capitalize",
                            cat.bg, cat.text
                          )}>
                            {ev.category}
                          </span>
                          <h4 className="mt-1 font-heading text-xs mobile-large:text-sm
                                         font-bold text-text-primary line-clamp-1">
                            {ev.title}
                          </h4>
                          <p className="mt-0.5 text-[10px] mobile-large:text-xs
                                        text-text-secondary line-clamp-2">
                            {ev.description}
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-3">
                            <span className="flex items-center gap-1
                                             text-[9px] mobile-large:text-[10px]
                                             text-text-secondary">
                              <MapPin className="h-3 w-3" /> {ev.location}
                            </span>
                            <span className="flex items-center gap-1
                                             text-[9px] mobile-large:text-[10px]
                                             text-text-secondary">
                              <Clock className="h-3 w-3" /> {ev.time}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalendarView;