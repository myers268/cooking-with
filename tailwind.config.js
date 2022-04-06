const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./app/**/*.{jsx,tsx,mdx}"],
  corePlugins: {
    borderColor: false,
  },
  theme: {
    // colors: {
    //   primary: "#ff5400",
    //   secondary: "#86c7f0",
    //   light: "#f3f3f3",
    //   dark: "#252525"
    // },
    // backgroundColor: ({theme}) => theme("colors"),
    // textColor: ({theme}) => theme("colors"),
    spacing: {
      "4xs": "var(--space-4xs)",
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      "xs": "var(--space-xs)",
      "sm": "var(--space-s)",
      "md": "var(--space-m)",
      "lg": "var(--space-l)",
      "xl": "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)"
    },
    fontSize: {
      "xs": "var(--step--2)",
      "sm": "var(--step--1)",
      "base": "var(--step-0)",
      "md": "var(--step-1)",
      "lg": "var(--step-2)",
      "xl": "var(--step-3)",
      "2xl": "var(--step-4)",
      "3xl": "var(--step-5)"
    },
    gap: ({theme}) => theme("spacing"),
    inset: ({theme}) => ({
      0: "0",
      ...theme("spacing")
    }),
    margin: ({theme}) => ({
      auto: "auto",
      ...theme("spacing")
    }),
    scrollMargin: ({theme}) => ({
      ...theme("spacing")
    }),
    textColor: ({theme}) => theme("colors"),
    extend: {
      fontFamily: {
        "heading": ["made-dillan", "cooper-black-std", "serif"],
        "sans": ["manrope", "sans-serif"],
      },
      colors: {
        teal: colors.teal,
        light: "#dbfff7",
        dark: "#00120e",
        primary: {
          light: colors.teal["100"],
          base: colors.teal["400"],
          dark: colors.teal["500"],
        },
        secondary: {
          light: colors.pink["100"],
          base: colors.pink["300"],
          dark: colors.pink["400"]
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
