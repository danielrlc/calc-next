/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-900": "hsl(222, 26%, 31%)",
        "blue-901": "hsl(223, 31%, 20%)",
        "blue-902": "hsl(224, 36%, 15%)",
        "blue-800": "hsl(225, 21%, 49%)",
        "blue-801": "hsl(224, 28%, 35%)",
        "red-900": "hsl(6, 70%, 34%)",
        "red-800": "hsl(6, 63%, 50%)",
        "orange-500": "hsl(30, 25%, 89%)",
        "orange-600": "hsl(28, 16%, 65%)",
        "gray-900": "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spartan: ['spartan'],
      },
    },
  },
  plugins: [],
};
