module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  emoveDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,
  theme: {
    extend: {
      colors: {
        bordyColor: "#1f1f1f",
        sideBar: "#252526",
        appRed: "#fa2d48",
        appGray: "#444444",
      },
      spacing: {
        feature: "480px",
        track: "225px",
        special: "230px",
        radio: "130px",
      },
      lineHeight: {
        extraLoose: "3.9rem",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
