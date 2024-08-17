"use client";
import { GithubYears, SiteConfig } from "@/lib/config";
import { Button, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  const [year, setYear] = useState(GithubYears[0]);
  return (
    <div className="mt-10 space-y-7 md:mx-auto !overflow-hidden">
      <p className="text-3xl font-bold ">Contrbution Graph</p>
      <div className="flex xl:flex-row md:items-center flex-col gap-4">
        <div className="bg-secondary/30 border border-divider p-8 rounded-lg max-w-fit max-h-fit z-20">
          <GitHubCalendar
            username={SiteConfig.user.socials.githubUserId}
            year={year}
            renderBlock={(block, activity) => (
              <Tooltip showArrow
              content={`${activity.count} activities on ${activity.date}`}
              >
                {block}
              </Tooltip>
            )}
          />
        </div>
        <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
          {GithubYears.map((y) => (
            <Button
              key={y}
              variant="solid"
              size="md"
              radius="full"
              color={y === year ? "success" : "default"}
              onClick={() => setYear(y)}
            >
              {y}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
