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
          className="w-6 h-6 cursor-pointer text-yellow-500"
        />
      ) : (
        <Moon
          onClick={() => setTheme("dark")}
          className="w-6 h-6 cursor-pointer text-blue-500"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
