/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {
			"purple-100": "hsl(254, 88%, 90%)",
			"purple-500": "hsl(256, 67%, 59%)",
			"Yellow-100": "hsl(31, 66%, 93%)",
			"Yellow-500": "hsl(39, 100%, 71%)",
			"white": " hsl(0, 0%, 100%)",
			"black": "hsl(0, 0%, 7%)"

		},
		},
		
	},
	plugins: [],
}
