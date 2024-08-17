import { Avatar } from "@nextui-org/react";
import React from "react";
import { Meteors } from "../ui/meteors";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export const AboutCardProjects = () => {
  return (
    <Link
      href="/projects"
      className="relative h-full w-full grid place-items-center p-5"
    >
      <Avatar src={"/images/dp.jpeg"} />
      <div className="w-full h-full flex flex-col gap-3 text-foreground">
        <h3 className="text-xl">Projects</h3>
        <p className="text-sm text-foreground/80">
          A collection of my favorite works
        </p>
      </div>
      <Meteors number={isMobile ? 3 : 7} />
    </Link>
  );
};
