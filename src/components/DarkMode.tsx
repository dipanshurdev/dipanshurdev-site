import useStore from "../libs/state";
import { useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const theme = useStore((mode) => mode.theme);
  const setTheme = useStore((mode) => mode.setTheme);

  // NOTE: ADD BETTER DARKMODE FEATURE!!!!!!!

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark";
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.add(theme);
    } else {
      window.localStorage.setItem("theme", theme);
      console.log("No theme");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="hover:ring-4 p-2 rounded-full transition-all duration-400 ease-in hover:ring-blue-700"
    >
      <img className="w-5 h-5" src="/icons/sun.svg" alt="Light Mode" />
    </button>
  );
};
export default DarkModeToggle;
