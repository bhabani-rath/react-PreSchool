import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUpNumber = ({ end, suffix = "", prefix = "", duration = 2.5 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          separator=","
        />
      ) : (
        "0"
      )}
    </span>
  );
};

export default CountUpNumber;