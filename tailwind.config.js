// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",

//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {},
//   },

//   plugins: [],
// };

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glass:
          "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
    },
  },

  plugins: [],
};