import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import SectionHeading from "../layout/SectionHeading";
import { cn } from "@/lib/utils";

interface itemsType {
  className?: string;
  content?: React.ReactNode;
}
const About = ({
  items,
  className,
}: {
  items: Array<itemsType>;
  className?: string;
}) => {
  return (
    <section className="flex flex-col text-center w-full justify-center items-center gap-10">
      <SectionHeading
        title="ABOUT"
        subtitle="Here’s what sets me apart and makes me unique"
      />
      <BentoGrid
        className={cn(
          "md:max-w-4xl w-full mx-auto grid-cols-2 md:grid-cols-4 md:gap-7 gap-6",
          className
        )}
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            content={item.content}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
