import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Mobile: 0px and up
      sm: 768, // Tablet: 768px and up
      md: 1024, // Desktop: 1024px and up
      lg: 1200, // Large desktop: 1200px and up
      xl: 1536, // Extra large: 1536px and up
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Responsive typography
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.2,
      "@media (min-width:768px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1024px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (min-width:768px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1024px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      "@media (min-width:768px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (min-width:768px)": {
        fontSize: "1.1rem",
      },
    },
  },
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 8,
  },
  components: {
    // Global component overrides for responsiveness
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          "@media (min-width:768px)": {
            paddingLeft: 24,
            paddingRight: 24,
          },
          "@media (min-width:1024px)": {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
