module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(16, 36, 62)",
          100: "rgb(16, 42, 76)",
          200: "rgb(15, 48, 88)",
          300: "rgb(13, 56, 104)",
          400: "rgb(10, 68, 129)",
          500: "rgb(9, 84, 165)",
          600: "rgb(0, 145, 255)",
          700: "rgb(54, 158, 255)",
          800: "rgb(82, 169, 255)",
          900: "rgb(234, 246, 255)",
        },
        neutral: {
          0: "rgb(3, 7, 18)",
          50: "rgb(17, 24, 39)",
          100: "rgb(31, 41, 55)",
          200: "rgb(55, 65, 81)",
          300: "rgb(75, 85, 99)",
          400: "rgb(107, 114, 128)",
          500: "rgb(156, 163, 175)",
          600: "rgb(209, 213, 219)",
          700: "rgb(229, 231, 235)",
          800: "rgb(243, 244, 246)",
          900: "rgb(249, 250, 251)",
          950: "rgb(255, 255, 255)",
        },
        error: {
          50: "rgb(60, 24, 26)",
          100: "rgb(72, 26, 29)",
          200: "rgb(84, 27, 31)",
          300: "rgb(103, 30, 34)",
          400: "rgb(130, 32, 37)",
          500: "rgb(170, 36, 41)",
          600: "rgb(229, 72, 77)",
          700: "rgb(242, 85, 90)",
          800: "rgb(255, 99, 105)",
          900: "rgb(254, 236, 238)",
        },
        warning: {
          50: "rgb(44, 33, 0)",
          100: "rgb(53, 40, 0)",
          200: "rgb(62, 48, 0)",
          300: "rgb(73, 60, 0)",
          400: "rgb(89, 74, 5)",
          500: "rgb(112, 94, 0)",
          600: "rgb(245, 217, 10)",
          700: "rgb(255, 239, 92)",
          800: "rgb(240, 192, 0)",
          900: "rgb(255, 250, 209)",
        },
        success: {
          50: "rgb(15, 41, 30)",
          100: "rgb(17, 49, 35)",
          200: "rgb(19, 57, 41)",
          300: "rgb(22, 68, 48)",
          400: "rgb(27, 84, 58)",
          500: "rgb(35, 110, 74)",
          600: "rgb(48, 164, 108)",
          700: "rgb(60, 177, 121)",
          800: "rgb(76, 195, 138)",
          900: "rgb(229, 251, 235)",
        },
        "brand-primary": "rgb(0, 145, 255)",
        "default-font": "rgb(249, 250, 251)",
        "subtext-color": "rgb(156, 163, 175)",
        "neutral-border": "rgb(55, 65, 81)",
        black: "rgb(3, 7, 18)",
        "default-background": "rgb(3, 7, 18)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Source Sans 3",
        "caption-bold": "Source Sans 3",
        body: "Source Sans 3",
        "body-bold": "Source Sans 3",
        "heading-3": "Source Sans 3",
        "heading-2": "Source Sans 3",
        "heading-1": "Source Sans 3",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        DEFAULT: "4px",
        lg: "8px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
