import { createTheme } from "@mui/material/styles";
import { palette, textVariants } from "./palette";

const baseTheme = createTheme({
  palette,
  spacing: (factor) => `${0.5 * factor}rem`,
  shape: {
    borderRadius: "0.5rem",
  },
  typography: {
    fontFamily: "Rubix",
    button: {
      textTransform: "capitalize",
      fontSize: "1rem",
    },
    ...textVariants,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html {
        font-size: 16px;
      }
      body {
        margin: 0;
        font-family: 'Rubix';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem
      }
      `,
    },
  },
});

export default baseTheme;
