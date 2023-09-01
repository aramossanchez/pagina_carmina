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
        'primaryColor2Soft': 'var(--primaryColor2Soft)',
        'primaryColor3': 'var(--primaryColor3)',
        'primaryColor4': 'var(--primaryColor4)',
        'primaryColor5': 'var(--primaryColor5)',
        'textColor': 'var(--textColor)',
        'whiteColor': 'var(--whiteColor)',
        'whiteColorTransparent': 'var(--whiteColorTransparent)',
        'greyColor': 'var(--greyColor)'
      }
    },
  },
  plugins: [],
}
