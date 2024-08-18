/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        alt: ['"Baloo 2"']
      },
      colors: {
        yellowdark: 'var(--yellow-dark)',
        yellow: 'var(--yellow)',
        yellowligth: 'var(--yellow-ligth)',
        purpledark: 'var(--purple-dark)',
        purple: 'var(--purple)',
        purpleligth: 'var(--purple-ligth)',
        basetitle: 'var(--base-title)',
        basesubtitle: 'var(--base-subtitle)',
        basetext: 'var(--base-text)',
        baselabel: 'var(--base-label)',
        basehover: 'var(--base-hover)',
        basebutton: 'var(--base-button)',
        baseinput: 'var(--base-input)',
        basecard: 'var(--base-card)',
        background: 'var(--background)',
        white: 'var(--white)'
      }
    },
  },
  plugins: [],
}

