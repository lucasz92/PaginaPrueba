/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    '.css/*.css',
    './scripts/*.js',
  ],
  theme: {
    extend: {
      width: {
        '20': '5rem',
      },
    },
  },
  plugins: [],
}

