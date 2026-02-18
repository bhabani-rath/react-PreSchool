import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TeacherCard from "./TeacherCard";
import { teamData } from "@/data/team";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const TeamGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading
          title="Meet Our Team 👩‍🏫"
          subtitle="Dedicated educators who make learning magical"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2
                     phablet:grid-cols-3
                     laptop:grid-cols-4
                     gap-4 mobile-large:gap-5
                     tablet:gap-6 desktop:gap-8"
        >
          {teamData.map((member) => (
            <motion.div key={member.id} variants={fadeInUp}>
              <TeacherCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;