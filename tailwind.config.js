/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': 'var(--primaryColor)',
        'primaryColorSoft': 'var(--primaryColorSoft)',
        'whiteColor': 'var(--whiteColor)',
        'whiteColorTransparent': 'var(--whiteColorTransparent)',
        'greyColor': 'var(--greyColor)'
      }
    },
  },
  plugins: [],
}
