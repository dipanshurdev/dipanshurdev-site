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
      className="hover:ring-4 p-2 rounded-full duration-500 ease-in-out hover:ring-blue-700  transition-all"
    >
      {theme === "dark" ? (
        <img
          title="😴 Mode"
          className="w-5 h-5"
          src={Moon.src}
          alt="Dark Mode"
        />
      ) : (
        <img
          title="😎 Mode"
          className="w-5 h-5 "
          src={Sun.src}
          alt="Light Mode"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
