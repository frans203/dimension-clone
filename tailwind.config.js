/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Onest: ["Onest", "sans-serif"],
      },
      transitionProperty: {
        left: "left",
        width: "width",
      },
      boxShadow: {
        boxShadowFundraise: "0 -4px 12px #d49eff4d inset",
      },
      backgroundImage: {
        backgroundPpy:
          "linear-gradient( 135deg, #926aff 0%, #ff77b0 50%, #ffb367 100%)",
        backgroundFundraise:
          "linear-gradient(135deg,rgba(202,183,255,.2) 0%,rgba(255,155,197,.2) 50%,rgba(255,202,149,.2) 100%)",
        fundraiseGlow:
          "linear-gradient(135deg,rgba(202,183,255,.04) 0%,rgba(255,155,197,.04) 50%,rgba(255,202,149,.04) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
