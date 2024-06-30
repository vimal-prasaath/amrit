import { ThemeProvider } from "@mui/material/styles";
import baseTheme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "routes";

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
