/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideIn: {
					"0%": { right: "100%" },
					"100%": { right: "50%" },
				},
			},
			animation: {
				slideIn: "slideIn 1s ease-in-out",
			},
			fontFamily: {
				caveat: ["Caveat", "Cursive"],
				yellowtail: ["Yellowtail", "Cursive"],
			},
		},
	},
	plugins: [],
};
