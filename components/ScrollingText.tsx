"use client";
import React, { useEffect, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const ScrollingText = ({ text }: { text: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.85", "start 0.25"],
  });
  const words = text.split(" ");
  return (
    <p ref={element} className="hidden xl:flex text-5xl flex-wrap justify-center items-center leading-relaxed text-center font-light">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = (
  {
    children,
    range,
    progress,
  }: {
    children: string;
    range: [number, number];
    progress: MotionValue<number>;
  },
  index: number
) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3">
      <span className="opacity-30 absolute text-center font-light">{children}</span>
      <motion.span className="relative text-center font-light" key={index} style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollingText;
