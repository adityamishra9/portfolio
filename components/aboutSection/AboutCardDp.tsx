"use client";
import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { SiteConfig } from "@/lib/config";
import Link from "next/link";

export const AboutCardDp = () => {
  return (
    <Link
      href={`https://linkedin.com/in/${SiteConfig.user.socials.linkedInUserId}`}
      color="foreground"
      className="relative w-full h-full flex md:gap-4 gap-2 items-center justify-center flex-col p-2"
      target="_blank"
    >
      <Avatar src={"/images/dp.jpeg"} size="lg" className="md:w-16 md:h-16 text-large" />
      @{SiteConfig.user.username}
      <Button
        variant="flat"
        className="bg-secondary-foreground dark:bg-secondary-foreground dark:text-secondary"
      >
        Follow
      </Button>
    </Link>
  );
};
