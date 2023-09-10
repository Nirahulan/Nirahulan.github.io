/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      backgroundImage:{
        'home' : 'url("https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        'try' : 'url("https://images.pexels.com/photos/4858277/pexels-photo-4858277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        'skills' : 'url("https://images.pexels.com/photos/6430096/pexels-photo-6430096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        'work' : 'url("https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        'contact' : 'url("https://images.pexels.com/photos/1054220/pexels-photo-1054220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'

        
      }
    },
  },
  plugins: [],
}


