import { create } from "zustand";
const nameElm = document.querySelector(".my-name");
const charW = nameElm?.getBoundingClientRect().width;
const charPx = Math.floor(charW as number);

const useStore = create((set) => ({
  darkMode: true,
  charwidth: charPx,
  setDarkMode: (darkMode: boolean) => set({ darkMode }),
}));

export default useStore;
