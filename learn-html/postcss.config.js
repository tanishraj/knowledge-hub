export default {
  plugins: {
    // Allows @import in your CSS files
    'postcss-import': {},

    // Enables nested CSS syntax
    'tailwindcss/nesting': {},

    // Processes Tailwind's directives and generates CSS
    tailwindcss: {},

    // Adds vendor prefixes for cross-browser compatibility
    autoprefixer: {},

    // Minifies CSS in production to reduce file size
    cssnano: false,
  },
};
