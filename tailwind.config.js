import tailwindcssAnimate from 'tailwindcss-animate';
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '375px',
        ...defaultTheme.screens
      }
    },

    extend: {
      backgroundImage: {
        logo: "url('/logos/logo.png')",
        brand: "url('/logos/brand.png')",
        hero: "url('/images/hero-image.png')",
        about: "url('/images/about-image.jpg')",
        footer: "url('/images/footer-background.png')",
        slide1: "url('/images/slide1.png')",
        slide2: "url('/images/slide2.png')",
        slide3: "url('/images/slide3.png')",
        slide4: "url('/images/slide4.png')",
        slide5: "url('/images/slide5.png')",
        slide6: "url('/images/slide6.png')",
        slide7: "url('/images/slide7.png')",
        map: "url('/images/map.png')",
        aboutcoffee: "url('/images/about-coffee.png')",
        coffeegrowth: "url('/images/coffee-growth.png')",
        coffeehistory: "url('/images/coffe-history.png')",
        aboutimage: "url('/images/about.png')",
        mobileabout: "url('/images/mobile-about.png')"
      },
      colors: {
        border: 'hsla(var(--border))',
        benefits: 'rgba(var(--benefits-background))',
        input: 'hsl(var(--input))',
        inactive: 'rgba(var(--progress-color))',
        textcolor: 'rgba(var(--text-color))',
        textsecondary: 'rgba(var(--text-secondary))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        texthighlight: 'rgba(var(--text-highlight))',
        textmuted: 'rgba(var(--text-muted))',
        icon: 'rgba(var(--icon-color))',
        iconbackground: 'rgba(var(--icon-background))',
        badgebackground: 'rgba(var(--badge-background))',
        footerbackground: 'rgba(var(--footer-background))',
        tab: 'rgba(var(--tab-background))',
        progressbackground:'hsla(var(--progress-color))',
        selectbackground: 'rgba(var(--select-background))',
        selectborder: 'rgba(var(--select-border))',
        cardborder: 'rgba(var(--card-border))',
        textdark: 'rgba(var(--text-dark))',
        Availablebackground:'rgba(var(--available-background))',
        Availabletext: 'rgba(var( --available-textcolor))',
        foreground: 'hsl(var(--foreground))',
        outline: 'rgba(var(--outline-background))',
        inputfield:'rgba(var(--input-field))',
        textdarken:'rgba(var(--text-darken))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'rgba(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderWidth: ['first'],
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
