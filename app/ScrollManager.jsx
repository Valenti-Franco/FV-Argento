import { useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const ScrollManager = (props) => {
  const { section, onSectionChange, isScrollAnimate, isScroll, setisScroll } =
    props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  const AnimationGsap = () => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  useFrame(() => {
    if (isScrollAnimate) {
      if (data.scroll.current === 0) {
        setisScroll(false);
      } else {
        setisScroll(true);
      }
      AnimationGsap();
      onSectionChange(0);
    }
    if (data.scroll.current === 0) {
      setisScroll(false);
    } else {
      setisScroll(true);
    }
    // if (isAnimating.current) {
    //   lastScroll.current = data.scroll.current;
    //   return;
    // }
    // // console.log("first page");

    // const curSection = Math.floor(data.scroll.current * data.pages);
    // if (data.scroll.current > lastScroll.current && curSection === 0) {
    //   onSectionChange(1);
    // }
    // console.log("first page");

    // if (
    //   data.scroll.current < lastScroll.current &&
    //   data.scroll.current < 1 / (data.pages - 1)
    // ) {
    //   // console.log("first page3");
    //   onSectionChange(0);
    // }
    // console.log("first page2");

    // lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager;
