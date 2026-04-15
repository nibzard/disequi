/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#10b981',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              borderLeftColor: '#10b981',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '1rem',
              borderRadius: '0.25rem',
            },
            a: {
              color: '#10b981',
              '&:hover': {
                color: '#34d399',
                textDecoration: 'none',
              },
            },
            h2: {
              color: '#10b981',
              fontWeight: '700',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: '#10b981',
              fontWeight: '600',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            h4: {
              color: '#10b981',
              fontWeight: '600',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '0.25rem',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              margin: '2rem 0',
            },
            th: {
              color: '#10b981',
              fontWeight: '600',
              borderBottom: '1px solid rgba(16, 185, 129, 0.2)',
              padding: '0.75rem',
            },
            td: {
              padding: '0.75rem',
              borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
            },
            img: {
              borderRadius: '0.25rem',
              margin: '1.5rem 0',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
            },
            ol: {
              paddingLeft: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), 
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}