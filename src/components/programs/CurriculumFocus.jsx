const CurriculumFocus = ({ items }) => {
  return (
    <div className="rounded-2xl mobile-large:rounded-3xl
                    bg-surface p-5 mobile-large:p-6
                    tablet:p-8 shadow-md ring-1 ring-black/5">
      <h3 className="font-heading text-lg mobile-large:text-xl
                     tablet:text-2xl font-bold text-text-primary
                     mb-4 mobile-large:mb-5">
        🎯 Curriculum Focus Areas
      </h3>

      <div className="grid grid-cols-1 mobile-large:grid-cols-2
                      laptop:grid-cols-3 desktop:grid-cols-4
                      gap-3 mobile-large:gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3
                       rounded-xl bg-background
                       px-4 py-3 mobile-large:px-5 mobile-large:py-4
                       hover:bg-primary/5 transition-colors"
          >
            <span className="text-xl mobile-large:text-2xl flex-shrink-0">
              {item.icon}
            </span>
            <span className="text-xs mobile-large:text-sm tablet:text-base
                             font-medium text-text-primary">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumFocus;