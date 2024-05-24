/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wave-bg": "url('/images/wave.svg')",
        "fndnote-bg": "url('/images/foundersbackground.svg')",
        "getintoch-bg": "url('/images/getintoch.svg')",
        "footer-bg": "url('/images/backgroundWave.svg')",
        "wave2-bg": "url('/images/wave2.svg')",
        "wave3-bg": "url('/images/wave3.svg')",
        "hero-bg": "url('/images/bgofhero.svg')",
        "movies-bg": "url('/images/ai.svg')",
      },
      colors: {
        violetPrimery: "#06071B",
      },
    },
  },

  plugins: [],
};
