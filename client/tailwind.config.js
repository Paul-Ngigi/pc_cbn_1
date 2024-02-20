/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    colors: {
      "bieg-color": "#F8EEDC",
      "peer-mint":'#E4FCE6',
      "peer-faded-grey":'#ECEEEC'
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
