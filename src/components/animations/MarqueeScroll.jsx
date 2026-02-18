const MarqueeScroll = ({ children, speed = 25, className }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex animate-marquee items-center gap-8
                   mobile-large:gap-10 tablet:gap-12 desktop:gap-16"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default MarqueeScroll;