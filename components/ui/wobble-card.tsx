"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Noise } from "./Noice";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  noNoise,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  noNoise?: boolean,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden",
        containerClassName
      )}
      initial={{
        backgroundImage:
          "radial-gradient(75% 63.6% at 50% 2.5%, rgba(36, 115, 236, 0.4) 0%, rgba(99, 102, 241, 0) 100%)",
      }}
      whileHover={{
        backgroundImage:
          "radial-gradient(75% 63.6% at 50% 2.5%, rgba(36, 115, 236, 0.6) 0%, rgba(99, 102, 241, 0) 100%)",
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
    >
      <div
        className="relative h-full sm:mx-0 sm:rounded-2xl" //overflow-hidden
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full", className)}
        >
          <Noise className={`${noNoise&&"hidden"} scale-[1.2]`} />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

