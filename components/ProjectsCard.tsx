import { cn } from "@/lib/utils";
import { Nextjs } from "@/public/images";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const ProjectsCard = ({
  items,
  containerClassName,
  className,
  showFooter = false,
}: {
  items: {
    title: string;
    description: string;
    src: any;
    link: string;
  }[];
  className?: string;
  containerClassName?: string;
  showFooter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full justify-center items-center gap-20 lg:gap-40",
        containerClassName
      )}
    >
      {items.map((item, index) => (
        <Card
          as={Link}
          href={item.link}
          key={index}
          className={cn(
            "bg-transparent border-none shadow-none text-default-600",
            className
          )}
        >
          <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between">
            <Image
              src={item.src}
              className="flex rounded-lg max-h-[20rem] object-contain px-3"
              alt="Image"
            />
          </CardHeader>
          <CardBody >
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              {item.title}
            </p>
            <p className="text-base md:text-lg">{item.description}</p>
          </CardBody>
          {showFooter && (
            <CardFooter hidden={!showFooter}>
              <AvatarGroup isBordered>
                <Avatar src="/images/Next.js.svg" />
                <Avatar src="/images/re.svg" />
                <Avatar src="/images/tail.svg" />
                <Avatar src="/images/ts.svg" />
              </AvatarGroup>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};
