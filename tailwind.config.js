/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./public/index.html",
	"./src/**/*.{js, jsx, ts, tsx}",
	"./src/components/**/*.{js, jsx, ts, tsx}",
	"./src/styledComponents/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: '#458FF6',
			secondary: '#FFFFFF',
			accent: '#F889D8',
			'accent-active': '#C7319C',
			default: {
				50: '#FFFFFF',
				100: '#7D7987',
				200: '#1F1534',
				300: '#233348',
			},
			success: '#05c46b',
			error: '#C7319C',
			info: '#508DC8',
			transparent: 'transparent',
		},
		screens: {
			'xs': '375px',
			'sm': '768px',
			'md': '1024px',
			'lg': '1280px',
			'xl': '1440px',
		},
	},
  },
  plugins: [
	require('@tailwindcss/line-clamp'),
  ],
}
