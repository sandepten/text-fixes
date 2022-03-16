module.exports = {
  darkmode: 'class',
  content: [
    './public/index.html',
    './src/App.js',
    './src/index.js',
    './src/Components/Navbar.js',
    './src/Components/Textarea.js',
    './src/Components/About.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
