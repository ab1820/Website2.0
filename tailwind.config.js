/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "script.js"],
  theme: {
    extend: {
      colors: {
        background: "url(../images/background.png)",
        hoverColor: "#4d7b93",
      },
      fontFamily: {
        headings: ["Marck\\ Script"],
        body: ["Share\\ Tech\\ Mono"],
      },
      screens: {
        xsm: "320px",
        smallM: "500px",
        odd: "800px",
        odd2: "853px",
        extraLg: "1200px",
      },
    },
  },
  plugins: [],
};
