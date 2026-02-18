import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const feeData = [
  {
    program: "Play School",
    emoji: "🎪",
    age: "2-3 yrs",
    price: "25,000",
    color: "from-yellow-400 to-orange-400",
    includes: ["Tuition Fee", "Books & Stationery", "Uniform (2 sets)", "Activity Kit", "Events & Celebrations"],
  },
  {
    program: "Nursery",
    emoji: "🌱",
    age: "3-4 yrs",
    price: "35,000",
    color: "from-green-400 to-emerald-400",
    includes: ["Tuition Fee", "Books & Stationery", "Uniform (2 sets)", "Activity Kit", "Events & Celebrations"],
  },
  {
    program: "LKG",
    emoji: "📖",
    age: "4-5 yrs",
    price: "50,000",
    color: "from-blue-400 to-cyan-400",
    popular: true,
    includes: ["Tuition Fee", "Books & Stationery", "Uniform (2 sets)", "Activity Kit", "Computer Lab", "Events"],
  },
  {
    program: "UKG",
    emoji: "🎓",
    age: "5-6 yrs",
    price: "65,000",
    color: "from-purple-400 to-pink-400",
    includes: ["Tuition Fee", "Books & Stationery", "Uniform (2 sets)", "Activity Kit", "Computer Lab", "Events"],
  },
];

const FeeCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Fee Structure"
          subtitle="Transparent and affordable — invest in your child's future"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1
                     mobile-large:grid-cols-2
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5 tablet:gap-6"
        >
          {feeData.map((fee, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl mobile-large:rounded-3xl
                          bg-surface overflow-hidden
                          shadow-md ring-1 ring-black/5
                          transition-shadow hover:shadow-xl
                          ${fee.popular ? "ring-2 ring-primary" : ""}`}
            >
              {fee.popular && (
                <div className="absolute top-0 right-0
                                bg-primary text-text-primary
                                px-3 py-1 mobile-large:px-4 mobile-large:py-1.5
                                text-[9px] mobile-large:text-[10px]
                                font-bold rounded-bl-xl">
                  POPULAR
                </div>
              )}

              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${fee.color}
                               p-4 mobile-large:p-5 tablet:p-6 text-center text-white`}>
                <span className="text-3xl mobile-large:text-4xl">{fee.emoji}</span>
                <h3 className="mt-2 font-heading text-lg
                               mobile-large:text-xl font-bold">
                  {fee.program}
                </h3>
                <p className="text-xs mobile-large:text-sm opacity-80">
                  Age: {fee.age}
                </p>
              </div>

              {/* Price */}
              <div className="p-4 mobile-large:p-5 tablet:p-6 text-center">
                <p className="font-heading text-2xl
                              mobile-large:text-3xl tablet:text-4xl
                              font-bold text-text-primary">
                  ₹{fee.price}
                  <span className="text-xs mobile-large:text-sm
                                   text-text-secondary font-normal">
                    /year
                  </span>
                </p>

                {/* Includes */}
                <ul className="mt-4 mobile-large:mt-5
                               space-y-2 mobile-large:space-y-2.5
                               text-left">
                  {fee.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2
                                 text-xs mobile-large:text-sm
                                 text-text-secondary"
                    >
                      <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/admissions#form" className="block mt-5 mobile-large:mt-6">
                  <Button
                    variant={fee.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 mobile-large:mt-8 text-center
                      text-xs mobile-large:text-sm text-text-secondary">
          💡 Contact us for detailed fee breakdown, payment plans & sibling discounts.
        </p>
      </div>
    </section>
  );
};

export default FeeCards;