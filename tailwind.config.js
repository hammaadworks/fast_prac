// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2E856E",
        "primary-light": "#D9F5EC",
        "primary-dark": "#1B5C4B",
        secondary: "#F9E4E2",
        "secondary-dark": "#A44F4C",
        background: "#FDFBF8",
        surface: "#FFFFFF",
        border: "#E3DED7",
        "muted-text": "#6B6259",
        "accent-gold": "#D4AF37",
        "accent-light": "#FFF7E7",
        success: "#A3B18A",
        "dark-bg": "#1E1E1E",
        "dark-card": "#2C2C2C",
        "dark-text": "#F3F0EB",
        "dark-accent": "#D1B000",
      },

      animation: {
        gradient: "gradientBG 5s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
};
