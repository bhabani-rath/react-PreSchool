import { motion } from "framer-motion";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 mobile-large:mb-3
                      flex items-center justify-between
                      text-xs mobile-large:text-sm">
        <span className="font-medium text-text-primary">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-text-secondary">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 mobile-large:h-2.5 tablet:h-3
                      w-full overflow-hidden rounded-full bg-background">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full rounded-full
                     bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
};

export default ProgressBar;