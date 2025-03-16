import { Button, Card, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Resume = () => {
  return (
    <div className="w-full h-full inset-0 flex flex-col gap-3 px-5 py-3 relative -z-10">
      <Link href="https://docs.google.com/document/d/12szBZUee_K97C2hTA89tsly0M4hDJZwYr0TTySy4g40/edit?usp=drive_link">
        <Card className="w-full space-y-5 p-4 " radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
        <Button
          size="md"
          variant="faded"
          className="absolute z-0 bottom-0 mb-5 mx-auto left-0 right-0 w-fit"
        >
          Resume
        </Button>
      </Link>
    </div>
  );
};
