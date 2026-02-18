import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { fadeInUp } from "@/utils/animations";

const criteria = [
  { program: "Play School", emoji: "🎪", age: "2 - 3 Years" },
  { program: "Nursery", emoji: "🌱", age: "3 - 4 Years" },
  { program: "LKG", emoji: "📖", age: "4 - 5 Years" },
  { program: "UKG", emoji: "🎓", age: "5 - 6 Years" },
];

const EligibilityTable = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading
          title="Eligibility Criteria"
          subtitle="Age as on March 31 of the admission year"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl mobile-large:rounded-3xl
                     bg-surface overflow-hidden
                     shadow-md ring-1 ring-black/5"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <th className="px-4 py-3 mobile-large:px-6 mobile-large:py-4
                               tablet:px-8 tablet:py-5
                               text-left text-xs mobile-large:text-sm tablet:text-base
                               font-bold text-text-primary">
                  Program
                </th>
                <th className="px-4 py-3 mobile-large:px-6 mobile-large:py-4
                               tablet:px-8 tablet:py-5
                               text-right text-xs mobile-large:text-sm tablet:text-base
                               font-bold text-text-primary">
                  Age Criteria
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-black/5 last:border-0
                             hover:bg-primary/5 transition-colors"
                >
                  <td className="px-4 py-3 mobile-large:px-6 mobile-large:py-4
                                 tablet:px-8 tablet:py-5">
                    <div className="flex items-center gap-2 mobile-large:gap-3">
                      <span className="text-xl mobile-large:text-2xl">{item.emoji}</span>
                      <span className="text-sm mobile-large:text-base tablet:text-lg
                                       font-semibold text-text-primary">
                        {item.program}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 mobile-large:px-6 mobile-large:py-4
                                 tablet:px-8 tablet:py-5
                                 text-right text-sm mobile-large:text-base tablet:text-lg
                                 font-medium text-primary">
                    {item.age}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityTable;