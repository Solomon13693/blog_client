/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        "primary": "#186784",
        "blue": "#002836",
        "success": "#014847",
        "danger": "#EE5D50",
        "dark": "#1D2329",
        "secondary": "#F6FDFF",
        'textColor': "#586283",
        'gray_color': "#E4E7EC",
        'green': "#27AE60",
        'border_color': '#F6FAFF'
      },
      fontSize: {
        xs: '13px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
};
