/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#0032b5",
        "on-primary": "#ffffff",
        "primary-container": "#0344ec",
        "on-primary-container": "#c8d0ff",
        "secondary": "#006a6a",
        "on-secondary": "#ffffff",
        "secondary-container": "#90efef",
        "on-secondary-container": "#006e6e",
        "tertiary": "#2b3b8d",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#4453a7",
        "on-tertiary-container": "#c9cfff",
        "surface": "#f8f9fa",
        "on-surface": "#191c1d",
        "surface-variant": "#e1e3e4",
        "on-surface-variant": "#454652",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "outline": "#757684",
        "error": "#ba1a1a",
        "amber-500": "#f59e0b",
        "amber-100": "#fef3c7",
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
