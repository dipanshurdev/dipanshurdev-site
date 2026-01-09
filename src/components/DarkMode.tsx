import useStore from "../libs/state";
import { useCallback, useEffect } from "react";
import { Moon, Sun } from "../utils/exportImages";
import type { ThemeType } from "../types";

const DarkModeToggle: React.FC = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  useEffect(() => {
    if (typeof window === "undefined") return; //SSR Safety

    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;

    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme: ThemeType = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
    }
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log(theme, newTheme);

    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10 hover:ring-2 hover:ring-primary/50"
    >
      {theme === "dark" ? (
        <img
          title="Switch to Light Mode"
          className="w-5 h-5"
          src={Moon.src}
          alt="Dark Mode"
        />
      ) : (
        <img
          title="Switch to Dark Mode"
          className="w-5 h-5"
          src={Sun.src}
          alt="Light Mode"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
