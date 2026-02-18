import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { fadeInUp } from "@/utils/animations";

const features = [
  { label: "Language", values: ["Basics", "Phonics", "Reading", "Advanced"] },
  { label: "Math", values: ["Shapes", "1-50", "1-100+", "Addition/Sub"] },
  { label: "Science", values: ["Nature", "Nature", "EVS", "STEAM"] },
  { label: "Computer", values: ["—", "—", "Intro", "Basics"] },
  { label: "Arts", values: ["✅", "✅", "✅", "✅"] },
  { label: "Sports", values: ["✅", "✅", "✅", "✅"] },
  { label: "Music/Dance", values: ["✅", "✅", "✅", "✅"] },
  { label: "Hindi", values: ["—", "Intro", "Basics", "Reading"] },
  { label: "GK", values: ["—", "—", "Intro", "Regular"] },
];

const programs = ["Play School", "Nursery", "LKG", "UKG"];

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Curriculum Comparison"
          subtitle="See what each program covers at a glance"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl mobile-large:rounded-3xl
                     bg-surface shadow-md ring-1 ring-black/5"
        >
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <th className="px-4 py-3 mobile-large:px-5 mobile-large:py-4
                               tablet:px-6 tablet:py-5
                               text-left text-xs mobile-large:text-sm tablet:text-base
                               font-bold text-text-primary">
                  Feature
                </th>
                {programs.map((prog) => (
                  <th
                    key={prog}
                    className="px-3 py-3 mobile-large:px-4 mobile-large:py-4
                               tablet:px-5 tablet:py-5
                               text-center text-xs mobile-large:text-sm tablet:text-base
                               font-bold text-text-primary"
                  >
                    {prog}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="border-b border-black/5 last:border-0
                             hover:bg-primary/5 transition-colors"
                >
                  <td className="px-4 py-2.5 mobile-large:px-5 mobile-large:py-3
                                 tablet:px-6 tablet:py-4
                                 text-xs mobile-large:text-sm tablet:text-base
                                 font-medium text-text-primary">
                    {feature.label}
                  </td>
                  {feature.values.map((val, j) => (
                    <td
                      key={j}
                      className="px-3 py-2.5 mobile-large:px-4 mobile-large:py-3
                                 tablet:px-5 tablet:py-4
                                 text-center text-xs mobile-large:text-sm tablet:text-base
                                 text-text-secondary"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;