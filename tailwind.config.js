/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%": {
            opacity: "1",
          },
          "19%": {
            opacity: "1",
          },
          "28%": {
            opacity: "1",
          },
          "32%": {
            opacity: "1",
          },
          "54%": {
            opacity: "0.8",
          },
          "84.999%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
          "18.999%": {
            opacity: "0.2",
          },
          "22.999%": {
            opacity: "0.2",
          },
          "34%": {
            opacity: "0.2",
          },
          "55%": {
            opacity: "0.2",
          },
          "82%": {
            opacity: "1",
          },
          "84.999%": {
            opacity: "1",
          },
          "89.999%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.4",
          },
          "99.88%": {
            opacity: "0.4",
          },
        },
      },
      animation: {
        flicker: "flicker 4s linear infinite alternate forwards",
      },
      dropShadow: {
        "text-sm": "0 2px 2px rgba(5, 5, 66)",
        "text-lg": [
          "0 0px 2px rgba(66, 101, 249)",
          "0 0px 2px rgba(5, 8, 76)",
          "0 0px 9px rgba(4, 16, 79)",
          "0 2px 2px rgba(111, 111, 111)",
        ],
      },
    },
  },
  plugins: [],
};
