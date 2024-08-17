import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutCardExtra = () => {
  return (
    <Link
      href="https://www.youtube.com/@Yash_Pede"
      target="_blank"
      className="md:grid grid-cols-4 grid-rows-1 gap-5 p-4 md:p-6 place-items-center group "
    >
      <div className="col-span-3 row-span-1 md:order-2 p-3 flex flex-col gap-3 text-foreground text-start z-10">
        <h3 className="text-xl">Youtube</h3>
        <p className="text-sm text-foreground/80">
          This a very old yt channel which I dont know who made. 😅 Dont watch
          !!!
        </p>
        <div className="grid grid-cols-3 place-items-center">
          <div className="flex items-start justify-start col-span-2">
            <p className="text-xs text-foreground/60 text-start">
              BTW Don&apos;t forget to subscribe 😉
            </p>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Button color="warning" variant="solid" className="md:hidden">
              Watch
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1 md:order-1 hidden md:flex w-full h-full justify-center items-center rounded-2xl overflow-hidden">
        <Image
          src="/gradiant.webp"
          alt="gradiant"
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
    </Link>
  );
};
