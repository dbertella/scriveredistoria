export default {
  breakpoints: ["30em", "48em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"Source Sans Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Source Sans Pro", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 22, 26, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#464E47",
    background: "#fafafa",
    primary: "#000",
    secondary: "#114810ff",
    muted: "#e6e6f0ff",
    darkGrey: "#787878",
    modes: {
      dark: {
        text: "#fafafa",
        background: "#333",
        primary: "#fff",
        secondary: "#bbb",
        muted: "#787878",
        darkGrey: "#aaa",
      },
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      bg: "backgroundTransparent",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "text",
      bg: "backgroundTransparent",
      textTransform: "uppercase",
      p: 3,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "text",
      "&:focus, &:active": {
        outline: "1px solid",
        outlineColor: "primary",
      },
      "&:hover": {
        bg: "textTransparent",
      },
    },
    outline: {
      color: "text",
      bg: "transparent",
      px: 2,
      py: 1,
      border: "1px solid",
      borderColor: "text",
      "&:hover": {
        color: "background",
        bg: "text",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
      overflowX: "hidden",
      fontSize: [2, null, 3],

      h1: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: [5, null, 6],
      },
      h2: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: [4, null, 5],
      },
      h3: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: [3, null, 4],
        mt: "2em",
      },
      h4: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 2,
      },
      h5: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 1,
      },
      h6: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 0,
      },
      p: {
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      },
      a: {
        color: "primary",
      },
      pre: {
        fontFamily: "monospace",
        overflowX: "auto",
        code: {
          color: "inherit",
        },
      },
      code: {
        fontFamily: "monospace",
        fontSize: "inherit",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      img: {
        maxWidth: "100%",
        width: "auto",
        height: "auto",
      },
      audio: {
        width: "100%",
      },
      blockquote: {
        mx: 0,
        px: 4,
      },
    },
    container: {
      maxWidth: 1200,
      my: 2,
      mx: "auto",
      px: [3, 4],
    },
  },
};
