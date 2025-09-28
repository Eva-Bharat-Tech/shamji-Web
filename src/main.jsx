import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import "./assets/Fonts/fonts.css";
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
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    // Responsive typography with custom fonts
    h1: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (min-width:768px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1024px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.3,
      "@media (min-width:768px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1024px)": {
        fontSize: "2.25rem",
      },
    },
    h3: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 600,
      "@media (min-width:768px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 600,
      "@media (min-width:768px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1.1rem",
      fontWeight: 600,
      "@media (min-width:768px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontFamily:
        '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      "@media (min-width:768px)": {
        fontSize: "1.1rem",
      },
    },
    body1: {
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      "@media (min-width:768px)": {
        fontSize: "1.1rem",
      },
    },
    body2: {
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      "@media (min-width:768px)": {
        fontSize: "0.95rem",
      },
    },
    button: {
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    overline: {
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
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
          fontFamily:
            '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
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
