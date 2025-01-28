import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      container: {
        center: true,
      },
      backgroundImage: {
        primary:
          'url("/home/nurmurod/Desktop/sushi/sushi/src/assets/images/orqafon.png")',
      },
      colors: {
        primary: "#E07153",
        secondary: "#A1DCDC",
        dark: "#1B1B1B",
        third: "#62E2B4",
      },
    },
  },
  plugins: [],
} satisfies Config;
