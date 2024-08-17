import { Button, Card, Skeleton } from "@nextui-org/react";
import React from "react";

export const Resume = () => {
  return (
    <div className="w-full h-full inset-0 flex flex-col gap-3 px-5 py-3 relative -z-10">
      <Card
        className="w-full space-y-5 p-4 "
        radius="lg"
      >
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
    </div>
  );
};
