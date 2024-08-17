import React from "react";

const SectionHeading = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle: string;
}) => {
  return (
    <div className="md:max-w-md text-start md:text-center w-full flex justify-center items-start md:items-center flex-col gap-5">
      <p className="text-primary font-medium text-lg">{title}</p>
      <p className="text-4xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
