/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // keyframes: {
      //   flicker: {
      //     "0%": {
      //       opacity: "1",
      //     },
      //     "19%": {
      //       opacity: "1",
      //     },
      //     "28%": {
      //       opacity: "1",
      //     },
      //     "32%": {
      //       opacity: "1",
      //     },
      //     "54%": {
      //       opacity: "0.8",
      //     },
      //     "84.999%": {
      //       opacity: "1",
      //     },
      //     "100%": {
      //       opacity: "1",
      //     },
      //     "18.999%": {
      //       opacity: "0.2",
      //     },
      //     "22.999%": {
      //       opacity: "0.2",
      //     },
      //     "34%": {
      //       opacity: "0.2",
      //     },
      //     "55%": {
      //       opacity: "0.2",
      //     },
      //     "82%": {
      //       opacity: "1",
      //     },
      //     "84.999%": {
      //       opacity: "1",
      //     },
      //     "89.999%": {
      //       opacity: "1",
      //     },
      //     "100%": {
      //       opacity: "1",
      //     },
      //     "50%": {
      //       opacity: "0.8",
      //     },
      //     "99.88%": {
      //       opacity: "0.8",
      //     },
      //   },
      // },
      // keyframes: {
      //   flicker: {
      //     "0%": {
      //       opacity: "1",
      //       textShadow: "0 0 2px #1d4ed8",
      //     },
      //     "11%": {
      //       opacity: "1",
      //       textShadow: "0 0 3px #1d4ed8",
      //     },
      //     "22%": {
      //       opacity: "0.2",
      //       textShadow: "0 0 2px #1d4ed8",
      //     },
      //     "33%": {
      //       opacity: "1",
      //       textShadow: "0 0 2px #1d4ed8",
      //     },
      //     "44%": {
      //       opacity: "1",
      //       textShadow: "0 0 2px #1d4ed8",
      //     },
      //     "55%": {
      //       opacity: "0.2",
      //       textShadow: "0 0 2px #1d4ed8",
      //     },
      //     "66%": {
      //       opacity: "1",
      //       textShadow: "0 0 4px #1d4ed8",
      //     },
      //     "77%": {
      //       opacity: "1",
      //       textShadow: "0 0 5px #1d4ed8",
      //     },
      //     "88%": {
      //       opacity: "0.2",
      //       textShadow: "0 0 6px #1d4ed8",
      //     },
      //     "99%": {
      //       opacity: "0.2",
      //       textShadow: "0 0 7px #1d4ed8",
      //     },
      //     "100%": {
      //       opacity: "1",
      //       textShadow: "0 0 8px #1d4ed8",
      //     },
      //   },
      // },

      keyframes: {
        flicker: {
          "0%": {
            opacity: "0.2",
            textShadow: "0 0 2px #1d4ed8",
          },
          "11%": {
            opacity: "1",
            textShadow: "0 0 2px #1d4ed8",
          },
          "19%": {
            opacity: "0.2",
            textShadow: "0 0 2px #1d4ed8",
          },
          "22%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "29%": {
            opacity: "0.2",
            textShadow: "0 0 2px    #1d4ed8",
          },
          "33%": {
            opacity: "1",
            textShadow: "0 0 2px   #1d4ed8",
          },
          "40%": {
            opacity: "1",
            textShadow: "0 0 2px #1d4ed8",
          },
          "44%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "50%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "55%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "60%": {
            opacity: "0.8",
            textShadow: "0 0 2px #1d4ed8",
          },
          "80%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "100%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "22%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
          "80%": {
            opacity: "1",
            textShadow: "0 0 4px #1d4ed8",
          },
        },
      },
      animation: {
        flicker: "flicker 4s linear infinite alternate forwards",
      },
      dropShadow: {
        "blue-sm": "0 2px 2px rgba(5, 5, 66)",
        "blue-lg": [
          "0 0px 2px rgba(66, 101, 249)",
          "0 0px 2px rgba(5, 8, 76)",
          "0 0px 9px rgba(4, 16, 79)",
          "0 2px 2px rgba(111, 111, 111)",
        ],
        "dark-sm": [
          "(0 0px 2px rgb(38 38 38))",
          "(0 0px 2px rgb(232 236 242))",
          "(0 0px 2px rgb(238 245 254))",
          "(0 0px 4px rgb(186 215 252)",
        ],
      },
      textColor: {
        dark: "#171717",
        light: "#e5e7eb",
        blueDark: "#1d4ed8",
        // blueLight: "#1d4ed8", blue-500
        darkSm: "#262626",
        darkExtra: "#0a0a0a",
        slateLight: "#0f172a",
        slateDark: "#020617",
      },
      backgroundColor: {
        dark: "#171717",
        light: "#e5e7eb",
        blueDark: "#1d4ed8",
        darkExtra: "#0a0a0a",
        darkSm: "#262626",
        slateLight: "#0f172a",
        slateDark: "#020617",
      },
      transitionTimingFunction: {
        transition4s: "all 0.4s ease-in",
      },
      fontFamily: {
        // sansPro: "Source Sans Pro",
      },
    },

    backgroundImage: {
      lightGradient:
        " linear-gradient(40deg, rgba(229,231,235,1) 0%, rgba(239,246,255,1) 49%, rgba(191,219,254,1) 81%, rgba(147,197,253,1) 91%)",
      lightGradientMain:
        "linear-gradient(40deg, rgb(224 224 224) 10%, rgb(203 203 203) 24%, rgb(234 241 248) 80%, rgb(175 213 255) 90%)",
    },
  },
  plugins: [],
};
