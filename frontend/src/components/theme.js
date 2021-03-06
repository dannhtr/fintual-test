const style = {
  colors: {
    primary: "#005AD6",
    secondary: "#002961",
    gray: "#868686",
    disabled: "#D9D9D9",
    bg: "#F3F6FA",
    success: "#12E4B2",
    danger: "#FF5656",
    warning: "#FCD034",
    info: "#179EFF",
    white: "#fff"
  },
  radii: {
    small: 4,
    medium: 8,
    large: 12
  },
  fontSizes: {
    mini: 12,
    basic: 16,
    small: 18,
    medium: 24,
    big: 36,
    large: 42,
    gigant: 64
  },
  borderWidths: {
    thin: 2,
    thick: 4
  },
  space: {
    mini: 5,
    basic: 10,
    small: 15,
    medium: 20,
    big: 25,
    large: 30
  },
  breakpoints: ["568px", "768px", "1366px", "	1680px"]
}

style.breakpoints.sm = style.breakpoints[0]
style.breakpoints.md = style.breakpoints[1]
style.breakpoints.lg = style.breakpoints[2]
style.breakpoints.xl = style.breakpoints[3]

export default style
