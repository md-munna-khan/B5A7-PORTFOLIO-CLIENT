"use client"; // important

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after hydration
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent mismatch

  const currentTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
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
      
      <Sun className={`absolute w-5 h-5 text-yellow-400 transition-opacity ${currentTheme === "dark" ? "opacity-100" : "opacity-0"}`} />
      <Moon className={`absolute w-5 h-5 transition-opacity ${currentTheme === "dark" ? "opacity-0" : "opacity-100"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
