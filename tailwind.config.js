/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Subsidence risk color scale: blue (safe) → yellow (warning) → red (danger)
        // Colorblind-friendly palette
        'risk-blue': '#2563eb',      // Safe - low risk
        'risk-cyan': '#06b6d4',      // Low-medium risk
        'risk-yellow': '#eab308',    // Medium risk - warning
        'risk-orange': '#f97316',    // Medium-high risk
        'risk-red': '#dc2626',       // High risk - danger
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}















