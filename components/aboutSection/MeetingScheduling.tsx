import { SiteConfig } from "@/lib/config";
import { GoogleCalander } from "@/public/images";
import { ArrowUpRightFromCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MeetingScheduling = () => {
  return (
    <Link
      href={SiteConfig.user.schedulerLink}
      target="_blank"
      className="relative w-full h-full flex justify-between items-start p-4 md:p-6 group "
    >
      <div className="w-full h-full flex flex-col gap-3 text-foreground text-start z-10">
        <h3 className="text-xl">Book a call with me</h3>
        <p className="text-sm text-foreground/80">
          I&apos;d love to chat even if there&apos;s no agenda.
        </p>
        <p className="text-xs text-foreground/60 mt-auto">
          Powerd by google calendar
        </p>
      </div>
      <ArrowUpRightFromCircle className="absolute right-5 top-5 z-10 w-3 h-3 text-transparent transition-all duration-500 group-hover:text-divider/60 group-hover:top-2 opacity-0 group-hover:opacity-100" />
      <div className="overflow-hidden w-full h-full inset-0 transition-all duration-400 relative left-[15%] top-[20%] group-hover:top-[15%] scale-125 rounded-lg border-[0.5px] border-divider z-0">
        <Image
          src={GoogleCalander}
          alt="calendar"
          className="w-full h-full object-cover transition-all duration-400 "
        />
      </div>
    </Link>
  );
};
