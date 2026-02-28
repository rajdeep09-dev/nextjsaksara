/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: "#05000A",
        accent: "#5E17EB",
        accent2: "#FF007F",
        accent3: "#FF6A3D",
        deep: "#3A0088",
        primary_text: "#FFFFFF",
        secondary_text: "rgba(255,255,255,0.55)",
        muted_text: "rgba(255,255,255,0.35)",
        glass_fill: "rgba(255,255,255,0.03)",
        glass_fill_hover: "rgba(255,255,255,0.07)",
        glass_border: "rgba(255,255,255,0.06)",
        glass_border_hover: "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
