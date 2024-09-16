import useStore from "../libs/state";
import { useEffect } from "react";

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
      className="hover:ring-4 p-2 rounded-full transition-all duration-400 ease-in hover:ring-blue-700"
    >
      {/* Dynamically change the icon based on the theme */}
      {theme === "dark" ? (
        <img
          title="😴 Mode"
          className="w-5 h-5"
          src="/icons/moon.svg"
          alt="Dark Mode"
        />
      ) : (
        <img
          title="😎 Mode"
          className="w-5 h-5 "
          src="/icons/sun.svg"
          alt="Light Mode"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
