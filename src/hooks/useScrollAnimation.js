import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationConfig = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      trigger = {},
    } = animationConfig;

    const ctx = gsap.context(() => {
      gsap.fromTo(element, from, {
        ...to,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none",
          ...trigger,
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
};