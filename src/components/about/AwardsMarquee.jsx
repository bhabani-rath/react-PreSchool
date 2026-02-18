import SectionHeading from "@/components/common/SectionHeading";
import MarqueeScroll from "@/components/animations/MarqueeScroll";
import FadeIn from "@/components/animations/FadeIn";

const awards = [
  { icon: "🏅", title: "CBSE Affiliation", year: "2015" },
  { icon: "🏆", title: "Best Pre-School Award", year: "2023" },
  { icon: "📜", title: "ISO 9001 Certified", year: "2020" },
  { icon: "⭐", title: "Education Excellence Award", year: "2022" },
  { icon: "🎖️", title: "Top 10 Pre-Schools in Karnataka", year: "2024" },
  { icon: "🌟", title: "Green School Certification", year: "2021" },
  { icon: "💎", title: "Innovation in Education", year: "2023" },
  { icon: "🏅", title: "Parent's Choice Award", year: "2024" },
];

const AwardsMarquee = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 via-background to-secondary/5">
      <div className="container-main">
        <SectionHeading
          title="Awards & Recognitions 🏆"
          subtitle="Milestones of excellence that make us proud"
        />
      </div>

      <FadeIn>
        <MarqueeScroll speed={30}>
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3
                         mobile-large:gap-4
                         rounded-xl mobile-large:rounded-2xl
                         bg-surface px-4 py-3
                         mobile-large:px-5 mobile-large:py-4
                         tablet:px-6 tablet:py-5
                         shadow-md ring-1 ring-black/5
                         min-w-[200px] mobile-large:min-w-[240px]
                         tablet:min-w-[280px]"
            >
              <span className="text-2xl mobile-large:text-3xl tablet:text-4xl">
                {award.icon}
              </span>
              <div>
                <p className="text-xs mobile-large:text-sm tablet:text-base
                              font-semibold text-text-primary
                              whitespace-nowrap">
                  {award.title}
                </p>
                <p className="text-[10px] mobile-large:text-xs
                              text-text-secondary">
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </MarqueeScroll>
      </FadeIn>
    </section>
  );
};

export default AwardsMarquee;