// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', "./src\\subframe\\**\\*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("./src\\subframe\\tailwind.config.js")]
};



