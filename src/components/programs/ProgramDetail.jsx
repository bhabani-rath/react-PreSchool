import { motion } from "framer-motion";
import { Download, GraduationCap, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import DailySchedule from "./DailySchedule";
import CurriculumFocus from "./CurriculumFocus";
import LearningOutcomes from "./LearningOutcomes";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const ProgramDetail = ({ program }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mt-6 mobile-large:mt-8 tablet:mt-10"
    >
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="rounded-2xl mobile-large:rounded-3xl
                   bg-surface p-5 mobile-large:p-6
                   tablet:p-8 desktop:p-10
                   shadow-md ring-1 ring-black/5"
      >
        <div className="flex flex-col phablet:flex-row
                        phablet:items-center gap-4 mobile-large:gap-5
                        mb-5 mobile-large:mb-6 tablet:mb-8">
          <span className="text-4xl mobile-large:text-5xl tablet:text-6xl">
            {program.icon}
          </span>
          <div>
            <h2 className="font-heading text-2xl
                           mobile-large:text-3xl tablet:text-4xl
                           font-bold text-text-primary">
              {program.title}
            </h2>
            <p className="text-sm mobile-large:text-base
                          text-primary font-medium mt-1">
              Age: {program.age}
            </p>
          </div>
        </div>

        <p className="text-sm mobile-large:text-base tablet:text-lg
                      text-text-secondary leading-relaxed
                      max-w-3xl">
          {program.shortDescription}
        </p>

        {/* Quick Info Cards */}
        <div className="mt-5 mobile-large:mt-6 tablet:mt-8
                        grid grid-cols-1 mobile-large:grid-cols-3
                        gap-3 mobile-large:gap-4">
          <div className="flex items-center gap-3
                          rounded-xl bg-primary/5
                          px-4 py-3 mobile-large:px-5 mobile-large:py-4">
            <Users className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-[10px] mobile-large:text-xs text-text-secondary">
                Teacher-Student Ratio
              </p>
              <p className="text-sm mobile-large:text-base font-bold text-text-primary">
                {program.ratio}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3
                          rounded-xl bg-secondary/5
                          px-4 py-3 mobile-large:px-5 mobile-large:py-4">
            <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
            <div>
              <p className="text-[10px] mobile-large:text-xs text-text-secondary">
                Class Timing
              </p>
              <p className="text-sm mobile-large:text-base font-bold text-text-primary">
                {program.timing}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3
                          rounded-xl bg-accent/5
                          px-4 py-3 mobile-large:px-5 mobile-large:py-4">
            <GraduationCap className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <p className="text-[10px] mobile-large:text-xs text-text-secondary">
                Fee
              </p>
              <p className="text-sm mobile-large:text-base font-bold text-text-primary">
                Contact for Details
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Daily Schedule */}
      <motion.div variants={fadeInUp} className="mt-6 mobile-large:mt-8">
        <DailySchedule schedule={program.schedule} />
      </motion.div>

      {/* Curriculum Focus */}
      <motion.div variants={fadeInUp} className="mt-6 mobile-large:mt-8">
        <CurriculumFocus items={program.curriculumFocus} />
      </motion.div>

      {/* Learning Outcomes */}
      <motion.div variants={fadeInUp} className="mt-6 mobile-large:mt-8">
        <LearningOutcomes outcomes={program.outcomes} />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 mobile-large:mt-8 tablet:mt-10
                   flex flex-col mobile-large:flex-row
                   gap-3 mobile-large:gap-4"
      >
        <a href="/downloads/sample-curriculum.pdf" download>
          <Button variant="outline" className="w-full mobile-large:w-auto">
            <Download className="h-4 w-4" />
            Download Curriculum PDF
          </Button>
        </a>
        <Link to="/admissions">
          <Button className="w-full mobile-large:w-auto">
            🎓 Apply Now
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProgramDetail;