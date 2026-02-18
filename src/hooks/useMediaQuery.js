import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

// Convenience hooks for each breakpoint
export const useMini = () => useMediaQuery("(min-width: 320px)");
export const useMobile = () => useMediaQuery("(min-width: 375px)");
export const useMobileLarge = () => useMediaQuery("(min-width: 480px)");
export const usePhablet = () => useMediaQuery("(min-width: 640px)");
export const useTablet = () => useMediaQuery("(min-width: 768px)");
export const useTabletLarge = () => useMediaQuery("(min-width: 834px)");
export const useLaptop = () => useMediaQuery("(min-width: 1024px)");
export const useDesktop = () => useMediaQuery("(min-width: 1280px)");
export const useDesktopLarge = () => useMediaQuery("(min-width: 1440px)");
export const useWide = () => useMediaQuery("(min-width: 1680px)");
export const useUltrawide = () => useMediaQuery("(min-width: 1920px)");

export const useIsMobile = () => !useMediaQuery("(min-width: 768px)");
export const useIsTablet = () => {
  const isMin = useMediaQuery("(min-width: 768px)");
  const isMax = !useMediaQuery("(min-width: 1024px)");
  return isMin && isMax;
};
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");