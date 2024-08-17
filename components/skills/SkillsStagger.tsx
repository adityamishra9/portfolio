"use client";

import React from "react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { skills } from "@/lib/config";
import { fadeInAnimation } from "@/lib/animations";
import SectionHeading from "../layout/SectionHeading";

const MotionChip = motion(Chip);

const SkillsStagger = () => {
  return (
    <section className="w-full h-full flex flex-col gap-5 md:gap-7 items-center justify-center ">
      <SectionHeading title="SKILLS" subtitle="Here’s what I can do" />
      <div className="flex justify-center items-center flex-wrap max-w-4xl md:gap-3 gap-1">
        {skills.map((skill, i) => (
          <MotionChip
            key={i}
            variant="flat"
            color="primary"
            className="md:text-lg md:px-6 md:py-4 rounded-lg"
            variants={fadeInAnimation}
            initial="initial"
            animate="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i + 1}
          >
            {skill}
          </MotionChip>
        ))}
      </div>
    </section>
  );
};

export default SkillsStagger;
