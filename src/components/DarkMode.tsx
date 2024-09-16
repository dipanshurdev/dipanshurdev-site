import useStore from "../libs/state";
import { useEffect } from "react";
import { Moon, Sun } from "../utils/exportImages";

const DarkModeToggle: React.FC = () => {
  const theme = useStore((mode) => mode.theme);
  const setTheme = useStore((mode) => mode.setTheme);

  // Helper function to update the document class and localStorage
  const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    // Check if the theme is stored in localStorage
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark";

    if (localTheme) {
      // If a theme is found in localStorage, set it
      setTheme(localTheme);
      applyTheme(localTheme);
    } else {
      // If no theme is stored, use the default theme (light or dark) and store it
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="hover:ring-4 p-2 rounded-full duration-500 ease-in-out hover:ring-blue-700 ring-2 transition-all"
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
