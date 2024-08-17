import { HoverEffect } from "@/components/ChangelogCards";
import { changelog } from "@/lib/config";
import React from "react";

const ChangeLogPage = () => {
  return (
    <div>
      <HoverEffect className="flex flex-col" items={changelog} />
    </div>
  );
};

export default ChangeLogPage;
