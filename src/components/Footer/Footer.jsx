import { Box, Typography, IconButton, Divider } from "@mui/material";
import {
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
import Logo from "../../assets/Logo.svg";
const Footer = () => {
  const { isMobile, isTablet } = useResponsive();

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
        <ResponsiveGridContainer
          spacing={{ xs: 4, sm: 6, md: 8 }}
          sx={{
            flexDirection: isMobile || isTablet ? "column" : "row",
            justifyContent: isMobile || isTablet ? "center" : "space-between",
          }}
        >
          {/* Left Column - Company Info */}
          <ResponsiveGrid xs={12} md={isMobile || isTablet ? 12 : 6}>
            <Box>
              {/* Logo */}
              <Box sx={{ mb: 3 }}>
                <img
                  src={Logo}
                  alt="Sham Ji Advertisement Company"
                  style={{
                    height: "50px",
                    width: "auto",
                  }}
                />
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
          <ResponsiveGrid
            xs={12}
            md={isMobile || isTablet ? 12 : 6}
            sx={{ textAlign: "left" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
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
                    justifyContent: "flex-start",
                  }}
                >
                  <Email
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: 1,
                      order: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: 2,
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
                    justifyContent: "flex-start",
                  }}
                >
                  <Phone
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: 1,
                      order: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: 2,
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
                    justifyContent: "flex-start",
                  }}
                >
                  <LocationOn
                    sx={{
                      color: "text.secondary",
                      fontSize: 20,
                      mr: 1,
                      order: 1,
                      mt: 0.2,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      order: 2,
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
                  justifyContent: "flex-start",
                }}
              >
                {socialLinks.map((social, index) => (
                  // <IconButton
                  //   key={index}
                  //   href={social.href}
                  //   sx={{
                  //     color: social.color,
                  //     "&:hover": {
                  //       backgroundColor: `${social.color}15`,
                  //       transform: "translateY(-2px)",
                  //     },
                  //     transition: "all 0.3s ease",
                  //   }}
                  // >
                  //   <social.icon sx={{ fontSize: 24 }} />
                  // </IconButton>
                  <a href={social.href}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                    >
                      <path
                        d="M2.03189 12.5003V3.81231C2.03189 3.22565 2.15989 2.70831 2.41589 2.26031C2.68256 1.81231 3.04523 1.46031 3.50389 1.20431C3.97323 0.948312 4.51189 0.820312 5.11989 0.820312C5.58923 0.820312 5.98923 0.900312 6.31989 1.06031C6.65056 1.22031 6.9599 1.44965 7.24789 1.74831L6.1119 2.88431C5.98389 2.75631 5.84523 2.65498 5.69589 2.58031C5.54656 2.50565 5.35456 2.46831 5.11989 2.46831C4.69323 2.46831 4.36256 2.58565 4.12789 2.82031C3.90389 3.04431 3.79189 3.36965 3.79189 3.79631V12.5003H2.03189ZM0.191895 6.42031V4.82031H6.1119V6.42031H0.191895Z"
                        fill="white"
                      />
                    </svg>
                  </a>
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
