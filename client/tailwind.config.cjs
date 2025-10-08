/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1ABC9C",
				secondary: "#16A085",
				secondary2: "#00336C",
				accent1: "#F39C12",
				accent2: "#ECF0F1",
				accent3: "#BDC3C7",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			grotesk: ["Space Grotesk", "sans-serif"],
			sans: ["Inter", "sans-serif"], // default body text
		},
		keyframes: {
			marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-141%)" },
			},
		},
		animation: {
			marquee: "marquee 25s linear infinite", // adjust duration as needed
		},
	},
	plugins: [],
};
