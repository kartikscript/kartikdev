"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ensures no mismatch between SSR and client
  }

  return (
    <div className="flex items-center">
      {/* Toggle based on current theme */}
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme("light")}
          className="size-7 cursor-pointer text-amber-400 hover:rotate-180 transition-all duration-500"
        />
      ) : (
        <Moon
          onClick={() => setTheme("dark")}
          className="size-7 cursor-pointer text-primary-500 hover:animate-pulse"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
