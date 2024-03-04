import React, { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

const useDebounce = (callback: Function, delay: number) => {
  const [debouncedFunction, setDebouncedFunction] = useState<Function>(
    () => {}
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFunction(() => callback);
    }, delay);

    return () => clearTimeout(handler);
  }, [callback, delay]);

  return debouncedFunction;
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const useClickAway = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const useThrottle = (callback: Function, delay: number) => {
  const [lastCall, setLastCall] = useState<number>(0);

  const throttledFunction = (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      callback(...args);
      setLastCall(now);
    }
  };

  return throttledFunction;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileCheck = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    mobileCheck();

    window.addEventListener("resize", mobileCheck);

    return () => window.removeEventListener("resize", mobileCheck);
  }, []);

  return isMobile;
};

export {
  useWindowSize,
  useDebounce,
  useMediaQuery,
  useClickAway,
  useThrottle,
  useIsMobile,
};
