import { Box, Typography, IconButton, Divider } from "@mui/material";
import {
  Campaign,
  Email,
  Phone,
  LocationOn,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

const Footer = () => {
  const { isMobile } = useResponsive();

  // Navigation links
  const navLinks = ["Home", "About us", "Services", "Contact us", "FAQ"];

  // Social media links
  const socialLinks = [
    { icon: Facebook, color: "#1877F2", href: "#" },
    { icon: Instagram, color: "#E4405F", href: "#" },
    { icon: LinkedIn, color: "#0A66C2", href: "#" },
    {
      icon: ({ sx }) => (
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: "#EA4C89",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
            ...sx,
          }}
        >
          D
        </Box>
      ),
      color: "#EA4C89",
      href: "#",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 4, sm: 5, md: 6 },
      }}
    >
      <ResponsiveContainer>
        {/* Main Footer Content */}
        <ResponsiveGridContainer spacing={{ xs: 4, sm: 6, md: 8 }}>
          {/* Left Column - Company Info */}
          <ResponsiveGrid xs={12} md={6}>
            <Box>
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
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

              {/* Company Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: { xs: "100%", md: 400 },
                }}
              >
                We are a creative advertising agency dedicated to delivering
                impactful campaigns across platforms. With innovative ideas and
                execution excellence, we help brands amplify their visibility
                and engagement.
              </Typography>
            </Box>
          </ResponsiveGrid>

          {/* Right Column - Contact Info */}
          <ResponsiveGrid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-end" },
                textAlign: { xs: "left", md: "right" },
              }}
            >
              {/* Contact Details */}
              <Box sx={{ mb: 4 }}>
                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <Email
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: { xs: 1, md: 0 },
                      ml: { xs: 0, md: 1 },
                      order: { xs: 1, md: 2 },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: { xs: 2, md: 1 },
                    }}
                  >
                    shyamjiadvertisementjaipur@gmail.com
                  </Typography>
                </Box>

                {/* Phone */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <Phone
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: { xs: 1, md: 0 },
                      ml: { xs: 0, md: 1 },
                      order: { xs: 1, md: 2 },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: { xs: 2, md: 1 },
                    }}
                  >
                    8650770777
                  </Typography>
                </Box>

                {/* Address */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 3,
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <LocationOn
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: { xs: 1, md: 0 },
                      ml: { xs: 0, md: 1 },
                      order: { xs: 1, md: 2 },
                      mt: 0.2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: { xs: 2, md: 1 },
                      maxWidth: 200,
                    }}
                  >
                    646, Vidhyadhar Nagar, Jaipur, Rajasthan
                  </Typography>
                </Box>
              </Box>

              {/* Social Media Icons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                }}
              >
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    sx={{
                      color: social.color,
                      "&:hover": {
                        backgroundColor: `${social.color}15`,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <social.icon sx={{ fontSize: 24 }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </ResponsiveGrid>
        </ResponsiveGridContainer>

        {/* Divider */}
        <Divider sx={{ my: { xs: 4, sm: 5, md: 6 } }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "center" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3, md: 4 },
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            {navLinks.map((link) => (
              <Typography
                key={link}
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                  transition: "color 0.3s ease",
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              order: { xs: 1, md: 2 },
            }}
          >
            © 2025 Shyamji – All Right Reserved
          </Typography>
        </Box>
      </ResponsiveContainer>
    </Box>
  );
};

export default Footer;
