module.exports = {
  content: ["index.html", "blog/index.html", "dist/js/script.js"],
  darkMode:  "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#64748b",
        dark: "#0f172a",
        cwhite: "#d1d5db",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}
