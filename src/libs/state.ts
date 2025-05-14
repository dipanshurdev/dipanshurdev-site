import { create } from "zustand";
import type { ThemeType } from "../types";

// set of theme enum type

// interface for theme with keyof of enum ThemeType
interface ThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const useStore = create<ThemeState>()((set) => ({
  theme: "dark",
  setTheme: (theme) => {
    // Persisting and applying class directly from store
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    window.localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export { useStore as default };
