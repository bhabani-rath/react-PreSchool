import { CheckCircle2 } from "lucide-react";

const LearningOutcomes = ({ outcomes }) => {
  return (
    <div className="rounded-2xl mobile-large:rounded-3xl
                    bg-surface p-5 mobile-large:p-6
                    tablet:p-8 shadow-md ring-1 ring-black/5">
      <h3 className="font-heading text-lg mobile-large:text-xl
                     tablet:text-2xl font-bold text-text-primary
                     mb-4 mobile-large:mb-5">
        ✅ Learning Outcomes
      </h3>

      <ul className="space-y-2.5 mobile-large:space-y-3">
        {outcomes.map((outcome, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 mobile-large:gap-3"
          >
            <CheckCircle2 className="h-4 w-4 mobile-large:h-5 mobile-large:w-5
                                     text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-xs mobile-large:text-sm tablet:text-base
                             text-text-secondary leading-relaxed">
              {outcome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningOutcomes;