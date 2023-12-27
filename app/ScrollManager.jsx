"use client";

import { useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  // Define las animaciones que deseas aplicar
  const animations = [
    // Define tus animaciones aquí usando gsap
    // Por ejemplo:
    gsap.to(".elemento-a-animar", { opacity: 0, y: 100, duration: 1 }),
    gsap.to(".otro-elemento", { scale: 1.5, rotation: 45, duration: 1 }),
  ];

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      // Realiza la animación cuando el usuario scrollee hacia abajo
      isAnimating.current = true;
      gsap.to(animations, {
        duration: 1,
        onComplete: () => {
          isAnimating.current = false;
          onSectionChange(1);
        },
      });
    }

    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      // Realiza la animación cuando el usuario scrollee hacia arriba
      isAnimating.current = true;
      gsap.to(animations, {
        duration: 1,
        onComplete: () => {
          isAnimating.current = false;
          onSectionChange(0);
        },
      });
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager;
