/** Tailwind config for CI Agile static export
 * We compile Tailwind AFTER HTML export so we can include ./public/**/*.html in content scanning.
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./scripts/templates/**/*.html",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
