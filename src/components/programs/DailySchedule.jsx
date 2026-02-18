import { Clock } from "lucide-react";

const DailySchedule = ({ schedule }) => {
  return (
    <div className="rounded-2xl mobile-large:rounded-3xl
                    bg-surface p-5 mobile-large:p-6
                    tablet:p-8 shadow-md ring-1 ring-black/5">
      <h3 className="font-heading text-lg mobile-large:text-xl
                     tablet:text-2xl font-bold text-text-primary
                     mb-4 mobile-large:mb-5 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        Daily Schedule
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[300px]">
          <thead>
            <tr className="border-b border-black/10">
              <th className="py-2 mobile-large:py-3 pr-4
                             text-left text-xs mobile-large:text-sm
                             font-semibold text-text-secondary uppercase">
                Time
              </th>
              <th className="py-2 mobile-large:py-3
                             text-left text-xs mobile-large:text-sm
                             font-semibold text-text-secondary uppercase">
                Activity
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, i) => (
              <tr
                key={i}
                className="border-b border-black/5 last:border-0
                           hover:bg-primary/5 transition-colors"
              >
                <td className="py-2.5 mobile-large:py-3 tablet:py-4
                               pr-4 text-xs mobile-large:text-sm tablet:text-base
                               font-medium text-primary whitespace-nowrap">
                  {item.time}
                </td>
                <td className="py-2.5 mobile-large:py-3 tablet:py-4
                               text-xs mobile-large:text-sm tablet:text-base
                               text-text-primary">
                  {item.activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailySchedule;