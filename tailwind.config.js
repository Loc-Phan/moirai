/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
    extend: {
      screens: {
        "1.5xl": "1400px",
      }
    },
	},
	plugins: [],
};

