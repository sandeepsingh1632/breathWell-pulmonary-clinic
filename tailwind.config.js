/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    // Project-wide Global Container Max-Width: 1200px
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      maxWidth: {
        'site': '1200px',
        'container': '1200px',
      },
      colors: {
        // Colors directly from Figma Design System
        primary: {
          DEFAULT: '#2563EB', // Primary Blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#CBD5E1', // Secondary Slate
          hover: '#94A3B8',
        },
        dark: {
          DEFAULT: '#0F172A', // Dark Navy Headings & Text
          bg: '#111827',      // Dark Background
        },
        muted: '#6D6D6D',     // Body Paragraph Gray
        lightBlue: '#E0F2FE', // Light Tint Blue
        lightGray: '#F3F3F3', // Light Neutral Gray
        surface: '#F8FAFC',   // Light Surface Background
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'h5': ['18px', { lineHeight: '1.35', fontWeight: '600' }],
        'p-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'p-md': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'p-sm': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(37, 99, 235, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 12px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}
