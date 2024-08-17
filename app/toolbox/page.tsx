"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { HoverEffect } from "@/components/ui/cardHoverEffect";
import { hardware, toolboxData } from "@/lib/config";

const ToolboxPage = () => {
  return (
    <section className="">
      <h4 className="text-4xl font-light grid place-content-center ">
        Applications
      </h4>
      <div className="mt-14">
        <BentoGrid className="md:max-w-4xl w-full mx-auto grid-cols-2 md:flex flex-wrap justify-start items-start md:gap-7">
          {toolboxData.map((data, index) => (
            <BentoGridItem
              key={index}
              className={
                "relative w-fit flex gap-2 items-center justify-center flex-col p-7 md:p-10 overflow-visible"
              }
              noNoise
            >
              <Link
                isExternal
                href={data.link}
                className="flex justify-center flex-col gap-2"
                color="foreground"
              >
                <Image
                  src={data.icon}
                  alt={`${data.name}+"Logo"`}
                  className="size-16 sm:size-24 md:size-28"
                  width={120}
                  height={120}
                />
                <p className="text-small hidden sm:block md:text-xl z-10 capitalize truncate">
                  {data.name}
                </p>
              </Link>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
      <h4 className="text-4xl mt-28 font-light grid place-content-center ">
        Hardware
      </h4>
      <div className="md:max-w-5xl mx-auto mt-5">
        <HoverEffect items={hardware} />
      </div>
    </section>
  );
};

export default ToolboxPage;
