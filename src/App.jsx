import { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Chip,
} from "@mui/material";
import {
  Add,
  Remove,
  Refresh,
  Devices,
  TabletMac,
  PhoneIphone,
} from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveGridContainer,
  ResponsiveSection,
  useResponsive,
} from "./components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const {
    isMobile,
    isTablet,
    isDesktop,
    getCurrentBreakpoint,
    getResponsiveValue,
  } = useResponsive();

  // Responsive values example
  const logoSize = getResponsiveValue({
    xs: "4em",
    sm: "5em",
    md: "6em",
  });

  const cardColumns = getResponsiveValue({
    xs: 1,
    sm: 2,
    md: 3,
  });

  return (
    <>
      {/* Responsive Navigation */}
      <AppBar position="static">
        <ResponsiveContainer maxWidth="xl">
          <Toolbar sx={{ px: 0 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shamji Web - Responsive Setup
            </Typography>

            {/* Breakpoint indicator */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {isMobile && <PhoneIphone color="inherit" />}
              {isTablet && <TabletMac color="inherit" />}
              {isDesktop && <Devices color="inherit" />}
              <Chip
                label={getCurrentBreakpoint().toUpperCase()}
                size="small"
                color="secondary"
              />
            </Box>
          </Toolbar>
        </ResponsiveContainer>
      </AppBar>

      {/* Hero Section */}
      <ResponsiveSection fullHeight bgColor="background.default">
        <ResponsiveContainer>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="70vh"
          >
            {/* Responsive Logo Display */}
            <Box
              display="flex"
              justifyContent="center"
              gap={{ xs: 2, sm: 3, md: 4 }}
              mb={4}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
            >
              <img
                src={viteLogo}
                alt="Vite logo"
                style={{ height: logoSize, padding: "1em" }}
              />
              <img
                src={reactLogo}
                alt="React logo"
                style={{ height: logoSize, padding: "1em" }}
              />
            </Box>

            <Typography
              variant="h1"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                background: "linear-gradient(45deg, #1976d2, #dc004e)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Responsive Web Design
            </Typography>

            <Typography
              variant="h3"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600 }}
            >
              Built with Vite + React + Material-UI
            </Typography>

            {/* Responsive Feature Cards */}
            <ResponsiveGridContainer
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{ width: "100%", maxWidth: 1200 }}
            >
              <ResponsiveGrid xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent>
                    <PhoneIphone
                      sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                      Mobile First
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Optimized for mobile devices (0-767px)
                    </Typography>
                  </CardContent>
                </Card>
              </ResponsiveGrid>

              <ResponsiveGrid xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent>
                    <TabletMac
                      sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                      Tablet Ready
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Perfect for tablets (768-1023px)
                    </Typography>
                  </CardContent>
                </Card>
              </ResponsiveGrid>

              <ResponsiveGrid xs={12} sm={12} md={4}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent>
                    <Devices
                      sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                      Desktop Enhanced
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Enhanced experience for desktop (1024px+)
                    </Typography>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </ResponsiveGridContainer>
          </Box>
        </ResponsiveContainer>
      </ResponsiveSection>

      {/* Interactive Counter Section */}
      <ResponsiveSection bgColor="background.paper">
        <ResponsiveContainer maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Interactive Demo
            </Typography>

            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                maxWidth: 500,
                mx: "auto",
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                Counter: {count}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  gap: 1,
                  justifyContent: "center",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="primary"
                  onClick={() => setCount(count - 1)}
                  aria-label="decrease"
                  size={isMobile ? "small" : "medium"}
                >
                  <Remove />
                </IconButton>

                <Button
                  variant="contained"
                  onClick={() => setCount(count + 1)}
                  sx={{
                    minWidth: { xs: 200, sm: 120 },
                    py: { xs: 1.5, sm: 1 },
                  }}
                >
                  Count: {count}
                </Button>

                <IconButton
                  color="primary"
                  onClick={() => setCount(count + 1)}
                  aria-label="increase"
                  size={isMobile ? "small" : "medium"}
                >
                  <Add />
                </IconButton>
              </Box>

              <Button
                variant="outlined"
                startIcon={<Refresh />}
                onClick={() => setCount(0)}
                sx={{
                  mt: 3,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Reset Counter
              </Button>
            </Paper>
          </Box>
        </ResponsiveContainer>
      </ResponsiveSection>

      {/* Responsive Button Showcase */}
      <ResponsiveSection>
        <ResponsiveContainer>
          <Typography variant="h2" textAlign="center" gutterBottom>
            Responsive Components
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            These components automatically adapt to different screen sizes using
            our responsive system.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2 },
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
              maxWidth: 600,
              mx: "auto",
            }}
          >
            <Button variant="contained" size={isMobile ? "large" : "medium"}>
              Primary Action
            </Button>
            <Button variant="outlined" size={isMobile ? "large" : "medium"}>
              Secondary Action
            </Button>
            <Button variant="text" size={isMobile ? "large" : "medium"}>
              Text Action
            </Button>
          </Box>
        </ResponsiveContainer>
      </ResponsiveSection>
    </>
  );
}

export default App;
