/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-blue': '#0A0F25',
        'blue': '#0F1B46', 
        'neon-cyan': '#00E5FF',
        'vibrant-purple': '#B026FF',
        'deep-green': '#00523D',
        
        // Grayscale
        'light-gray': '#F5F5F5',
        'mid-gray': '#9CA3AF',
        'dark-gray': '#374151',
        
        // Text Colors
        'text-light': '#FFFFFF',
        'text-dark': '#0A0F25',
      },
      screens: {
        'sm': '640px',    // Mobile devices
        'md': '768px',    // Tablets
        'lg': '1024px',   // Laptops
        'xl': '1280px',   // Desktops
        '2xl': '1536px',  // Large monitors
      },
    },
  },
  plugins: [],
}
