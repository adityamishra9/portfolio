"use client";
import React from "react";
import { FullBody } from "@/public/images";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutCardFullPicture = () => {
  return (
    <Link href="/about" className="relative w-full h-full flex justify-center items-center inset-0">
      <motion.div
        className="absolute z-10 w-full h-full"
        initial={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(36, 66, 119, 0.15) 60%, rgba(35, 65, 119, 0.99) 99.043%, rgba(53, 69, 95, 1) 100%)",
          opacity: 0.8,
        }}
        whileHover={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(36, 66, 119, 0.15) 60%, rgba(35, 65, 119, 0.99) 99.043%, rgba(53, 69, 95, 1) 100%)",
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      />
      <Image
        src={FullBody}
        alt="Full Body"
        className="w-full h-full object-cover bottom-0"
      />
      <p className="absolute z-10 text-white text-xl bottom-0 mb-7">Learn more <br /> about me</p>
    </Link>
  );
};