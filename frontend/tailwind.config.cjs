/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["autumn","pastel","cupcake","dark"
    //   {
    //   mytheme: {
          
    //     "primary": "#c64039",
                 
    //     "secondary": "#165e7c",
                 
    //     "accent": "#d82b6d",
                 
    //     "neutral": "#342C3A",
                 
    //     "base-100": "#303C69",
                 
    //     "info": "#44A8DA",
                 
    //     "success": "#3CDD77",
                 
    //     "warning": "#D9A112",
                 
    //     "error": "#FB0E5D",
    //              }
    // },
  ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pat.svg')",
      },
      fontFamily: {
        'inter': ['Inter']
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")]
}
