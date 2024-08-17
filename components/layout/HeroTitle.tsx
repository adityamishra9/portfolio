"use client";
import { HeroTitleData } from "@/lib/config";
import React from "react";
import { usePathname } from "next/navigation";
import { Vortex } from "../ui/vortex";
import { isMobile } from "react-device-detect";

const HeroTitle = () => {
  const pathname = usePathname();
  return (
    <section className="h-60 px-7 w-full dark:bg-background bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-start md:justify-center  overflow-x-clip">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-secondary-foreground/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
      <Vortex
        particleCount={isMobile ? 20 : 100}
        baseHue={500} 
        baseSpeed={isMobile ? 0.05 : 0.25}
        baseRadius={isMobile ? 0.7 : 1}
        rangeY={isMobile ? 120 : 150}
        backgroundColor="#00000000"
        className="flex md:items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <p className="text-2xl sm:text-3xl md:text-5xl md:text-center font-bold relative z-20 bg-clip-text pb-8 lg:max-w-4xl">
          {HeroTitleData.map(
            (data, index) =>
              data.route === pathname &&
              data.title.map((line, index) => (
                <span key={index} className="leading-tight">
                  {line}
                  {index < HeroTitleData[0].title.length - 1 && <br />}
                </span>
              ))
          )}
        </p>
      </Vortex>
    </section>
  );
};

export default HeroTitle;
