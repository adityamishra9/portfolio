import { footerOptions, SiteConfig, socialLinks } from "@/lib/config";
import { Link } from "@nextui-org/react";
import React from "react";
import { Noise } from "../ui/Noice";
import { Meteors } from "../ui/meteors";
import { isMobile } from "react-device-detect";
import { Braces } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full gap-3 md:rounded-t-[7rem] flex flex-col gap-x-14 justify-center pt-10 bg-secondary md:h-[66] px-7 bg-gradient-to-t from-secondary/90  to-primary/25 items-center mt-24 text-divider/60 overflow-hidden md:max-w-5xl mx-auto">
      <Noise className="md:rounded-t-[7rem] opacity-5" />
      <div className="pb-5 md:flex md:flex-row md:space-x-20">
        <div className=" flex flex-col space-y-6 md:w-56 ">
          <Link color="foreground" href="/" className="font-semibold">
            <Braces/>
          </Link>
          <p className="font-medium">
            I&apos;m {SiteConfig.user.firstName} - a front-end developer,
            thanks for checking out my site!
          </p>

          <div className="flex flex-row space-x-3 text-neutral-700">
            {socialLinks.map((link, index) => (
              <Link
                isExternal
                className="text-divider/60 w-5 h-5"
                color="foreground"
                href={link.url}
                key={index}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div>© 2024 {SiteConfig.site.name}</div>
        </div>

        <div className="flex flex-wrap gap-x-20 font-semibold md:flex-row md:gap-20 md:justify-center">
          {footerOptions.map((items, index) => (
            <div
              className="flex flex-col gap-3  text-foreground mt-16 md:mt-0"
              key={index}
            >
              {items.title}
              <div className="flex flex-col font-medium space-y-1">
                {items.routes.map((link, index) => (
                  <Link
                    className="text-divider/60 dark:hover:text-white"
                    color="foreground"
                    href={link.route}
                    key={index}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Meteors number={isMobile ? 3 : 10} />
    </div>
  );
};

export default Footer;
