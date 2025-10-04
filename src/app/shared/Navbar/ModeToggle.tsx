
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn Button

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // system theme handle
  const currentTheme =
    theme === "system"
      ? typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative"
    >
      <Sun
        className={`absolute w-5 h-5 text-yellow-400 transition-opacity ${
          currentTheme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
      <Moon
        className={`absolute w-5 h-5 transition-opacity ${
          currentTheme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
