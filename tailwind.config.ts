import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        skyblue: "#C3EBFA",
        lightskyblue: "#EDF9FD",
        purple: "#CFCEFF",
        purplelight: "F1F0FF",
        yellow: "#FAE27C",
        yellowlight: "#FEFCE8"


      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      })
    }
  ],
};
export default config;
