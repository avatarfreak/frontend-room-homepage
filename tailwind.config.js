module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "clr-100": "var(--clr-100)",
        "clr-110": "var(--clr-110)",
        "clr-120": "var(--clr-120)",
        "clr-130": "var(--clr-130)",
      },
      fontSize: {
        "fs-100": "var(--fs-100)",
        "fs-200": "var(--fs-200)",
        "fs-300": "var(--fs-300)",
        "fs-400": "var(--fs-400)",
        "fs-500": "var(--fs-500)",
        "fs-600": "var(--fs-600)",
      },
      fontFamily: {
        sans: "var(--ff-sans)",
      },
      letterSpacing: {
        "t-100": "var(--t-100)",
        "t-200": "var(--t-200)",
        "t-300": "var(--t-300)",
        "t-400": "var(--t-400)",
      },
      lineHeight: {
        "l-100": "var(--l-100)",
        "l-200": "var(--l-200)",
      },
      gridTemplateColumns: {
        header: "minmax(840px, 1fr) 1fr",
      },
      gridTemplateRows: {
        body: "min-content 1fr",
      },
      minmax: {
        content: "24.69rem",
      },
      minHeight: {
        carousel: "33.44rem",
      },
    },
  },
  plugins: [],
};
