"use client";

import { Button } from "@nextui-org/react";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      className="text-foreground-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="light"
      size="sm"
      isIconOnly
      aria-label="Theme-Switcher    "
    >
      {theme === "light" ? (
        <SunDim fill="currentColor" fillOpacity={1} />
      ) : (
        <Moon fill="currentColor" fillOpacity={1} />
      )}
    </Button>
  );
}
