import { cn } from "@/lib/utils";

export const Noise = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
        className
      )}
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
