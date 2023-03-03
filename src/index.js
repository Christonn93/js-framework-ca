import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
 palette: {
  type: "light",
  primary: {
   main: "#3f51b5",
  },
  secondary: {
   main: "#f50057",
  },
  error: {
   main: "#f44336",
  },
  success: {
   main: "#4caf50",
  },
  warning: {
   main: "#ff9800",
  },
  info: {
   main: "#2196f3",
  },
 },
 typography: {
    h1: {
      fontFamily: 'Tilt Neon',
    },
    h2: {
      fontFamily: 'Tilt Neon',
    },
    fontFamily: 'Tilt Neon',
    fontSize: 16,
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiAppBar: {
      color: 'default',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <CssBaseline />
   <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>
  </BrowserRouter>
 </React.StrictMode>
);
reportWebVitals();
