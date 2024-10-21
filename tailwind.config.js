import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      light: {
        primary: "#838BFF",
        secondary: "F9F9FF",
      }
    }],
  },
  plugins: [
    daisyui,
  ],
}
