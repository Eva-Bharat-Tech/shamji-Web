import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Campaign } from "@mui/icons-material";
import { ResponsiveContainer, useResponsive } from "../index";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile } = useResponsive();
  const theme = useTheme();

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.main" }}>
        Sham Ji
      </Typography>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mx: 2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Get Started
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <ResponsiveContainer maxWidth="xl">
          <Toolbar sx={{ px: 0, py: { xs: 1, sm: 2 } }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Campaign
                sx={{
                  fontSize: { xs: 32, sm: 40 },
                  color: "primary.main",
                  mr: 1,
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: { xs: "1.5rem", sm: "1.75rem" },
                    lineHeight: 1,
                  }}
                >
                  Sham Ji
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Advertisement Company
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: 2,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </ResponsiveContainer>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
