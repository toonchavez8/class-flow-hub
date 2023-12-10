/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				darkTheme: {
					primary: "#ffffff",
					secondary: "#172e91",
					accent: "#082084",
					neutral: "#3d4451",
					"base-100": "#050d33",
				},
				lightTheme: {
					primary: "#050C29",
					secondary: "#6E80BF",
					accent: "#082084",
					neutral: "#3d4451",
					"base-100": "#fff",
				},
			},
		],
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
