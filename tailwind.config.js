/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-blue-200', 'border-purple-200', 'border-indigo-200', 
    'border-orange-200', 'border-emerald-200', 'border-pink-200', 
    'border-cyan-200', 'border-amber-200', 'border-rose-200',
    'shadow-xl', 'hover:shadow-md'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
