/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    fontFamily: {
      default: ['Poppins', 'sans-serif'],
      secondary: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        'green-primary': '#A6CF98',
        'green-contrast': '#5DB075',
        'green-light': '#F2FFE9',
        'green-semilight': '#D3E8C5',
        'green-dark': '#557C55',
        'green-dark-mode': '#3C463C',
        'red-default': '#FA7070',
        'yellow-contrast': '#ECAD32',
        'blue-xp': '#19E3FF',
        'dark-bg': '#475353'
      },
      boxShadow: {
        'default': '3px 3px 0 0 #000000',
        'when-hover':'5px 5px 0 0 #000000'
      },
      keyframes: {
        'fade-out-left': {
          '0%':{
            opacity: 1,
            transform: 'translateX(0)'
          },
          '100%':{
            opacity: 0,
            transform: 'translateX(-100%)'
          }
        },
        'fade-in': {
          '0%':{
            opacity: 0,
            transform: 'scale(0.95)'
          },
          '100%':{
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        'swipe-up-skill': {
          '0%':{
            opacity: 0,
            transform: 'translateY(200%)'
          },
          '100%':{
            opacity: 1,
            transform: 'translateY(-10vh)'
          }
        },
        'swipe-down-skill': {
          '0%':{
            opacity: 1,
            transform: 'translateY(-80px)'
          },
          '100%':{
            opacity: 0,
            transform: 'translateY(200%)'
          }
        },
        'rotate':{
          '0%':{
            transform: 'rotate(0deg)'
          },
          '100%':{transform: 'rotate(180deg)'}
        },
        'rotate-reverse':{
          '0%':{
            transform: 'rotate(180deg)'
          },
          '100%':{transform: 'rotate(0deg)'}
        },
        'aside-open':{
          '0%':{left: '-200%'},
          '100%':{left: '0'}
        },
        'aside-close':{
          '0':{left: '0'},
          '100%':{left: '-200%'}
        }
      },
      animation: {
        'fade-out-left': 'fade-out-left 1s ease-out forwards',
        'fade-in': 'fade-in .8s ease-in-out forwards',
        'swipe-up-skill': 'swipe-up-skill .5s ease-in-out forwards',
        'swipe-down-skill': 'swipe-down-skill .5s ease-in-out forwards',
        'rotate': 'rotate .3s ease-in-out forwards',
        'rotate-reverse': 'rotate-reverse .3s ease-in-out forwards',
        'aside-open':'aside-open .8s ease-in-out forwards',
        'aside-close':'aside-close .8s ease-in-out forwards',
      }
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')
  ],
}

