/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        miPrimary: '#0f0f0f',
        miSecondary: '#222222',
        miBorder: '#303030',
        miFocus: '#3ea6ff',
        miBg: '#121212',
      },
    },
  },
  plugins: [],
}

