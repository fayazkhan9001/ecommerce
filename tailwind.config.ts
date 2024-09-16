import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-inter)"],
        body: ["var(--font-poppins)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        primary: "#DB4444",
        secondary: "#09151B",
        tertiary: "#7d8184",
        error: "#DC2626",
        success: "#10B981",
        button: "#00FF66",
        hoverButton: "#E07575",
        lightBg: "#F5F5F5",
        lightBg2: "#FEFAF1",
        loginSignupBg: "#CDE5EA",
        productColor: "#A0BCE0",
      },
      lineHeight: {
        "140": "140%",
        "150": "150%",
        "130": "130%",
        "180": "180%",
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "10px",
        xl: "12px",
        xxl: "20px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
