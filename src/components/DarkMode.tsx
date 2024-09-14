import useStore from "../libs/state";
import { useEffect } from "react";
0;
const DarkModeToggle: React.FC = () => {
  const theme = useStore((mode) => mode.theme);
  const setTheme = useStore((mode) => mode.setTheme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark";
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
