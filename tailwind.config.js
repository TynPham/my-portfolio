// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        navy: 'var(--navy)',
        dark_navy: 'var(--dark-navy)',
        light_navy: 'var(--light-navy)',
        lightest_navy: 'var(--lightest-navy)',
        main_slate: 'var(--slate)',
        lightest_slate: 'var(--lightest-slate)',
        light_slate: 'var(--light-slate)',
        main_green: 'var(--green)'
      },
      fontFamily: {
        fira_mono: ['Fira Mono', 'monospace'],
        league_spartan: ['League Spartan, sans-serif']
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        appear: `0.3s appear 1.25s ease forwards`
      },
      boxShadow: {
        navy_shadow: 'var(--navy-shadow)'
      }
    }
  },
  plugins: [
    require('preline/plugin'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          minHeight: '100vh'
        }
      })
    }),
    require('tailwind-scrollbar'),
    require('@savvywombat/tailwindcss-grid-areas')
  ]
}
