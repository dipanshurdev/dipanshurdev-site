import { create } from "zustand";

// set of theme enum type
enum ThemeType {
  light = "light",
  dark = "dark",
}

// interface for theme with keyof of enum ThemeType
interface ThemeState {
  theme: keyof typeof ThemeType;
  setTheme: (theme: keyof typeof ThemeType) => void;
}

const useStore = create<ThemeState>()((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));

export { useStore as default };
