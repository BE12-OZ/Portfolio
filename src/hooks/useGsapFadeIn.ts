"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapFadeInProps {
  x?: number;
  y?: number;
  delay?: number;
}

export const useGsapFadeIn = <T extends HTMLElement>({ x = 0, y = 30, delay = 0 }: GsapFadeInProps = {}) => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;

    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }
  }, [x, y, delay]);

  return ref;
};
