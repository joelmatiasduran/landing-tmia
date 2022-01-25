//tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"], //add this line
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
