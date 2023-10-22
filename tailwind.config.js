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
        'primaryColor1': 'var(--primaryColor1)',
        'primaryColor2': 'var(--primaryColor2)',
        'primaryColor3': 'var(--primaryColor3)',
        'primaryColor4': 'var(--primaryColor4)',
        'secondaryColor1': 'var(--secondaryColor1)',
        'secondaryColor2': 'var(--secondaryColor2)',
        'textColor1': 'var(--textColor1)',
        'textColor2': 'var(--textColor2)',
        'whiteColor': 'var(--whiteColor)',
        'whiteColorTransparent': 'var(--whiteColorTransparent)',
        'greyColor': 'var(--greyColor)',
        'transparent': 'var(--transparent)'
      },
      boxShadow: {
        'customStrong': '0px 0px 12px 4px var(--shadow)',
        'customSoft': '0px 0px 8px 1px var(--shadow)'
      }
    },
  },
  plugins: [],
}
