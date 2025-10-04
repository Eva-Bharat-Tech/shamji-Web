import { Box, Typography, IconButton, Divider } from "@mui/material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";
import Logo from "../../assets/Logo.svg";
// Import custom SVG icons
import EmailIcon from "../../assets/icons/EMail.svg";
import CallIcon from "../../assets/icons/Call.svg";
import LocationIcon from "../../assets/icons/Location.svg";
import InstaIcon from "../../assets/icons/Insta.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn.svg";
import DribbleIcon from "../../assets/icons/Dribble.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";
const Footer = () => {
  const { isMobile, isTablet } = useResponsive();

  // Navigation links
  const navLinks = ["Home", "About us", "Services", "Contact us", "FAQ"];

  // Social media links
  const socialLinks = [
    { icon: FacebookIcon, color: "#1877F2", href: "#", alt: "Facebook" },
    { icon: InstaIcon, color: "#E4405F", href: "#", alt: "Instagram" },
    { icon: LinkedInIcon, color: "#0A66C2", href: "#", alt: "LinkedIn" },
    { icon: DribbleIcon, color: "#EA4C89", href: "#", alt: "Dribbble" },
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
                  <img
                    src={EmailIcon}
                    alt="Email"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 8,
                      order: 1,
                      filter: "opacity(0.7)",
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
                    sales@shamjimedia.com
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
                  <img
                    src={CallIcon}
                    alt="Phone"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 8,
                      order: 1,
                      filter: "opacity(0.7)",
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
                    8505-002200
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
                  <img
                    src={LocationIcon}
                    alt="Location"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 8,
                      order: 1,
                      marginTop: 2,
                      filter: "opacity(0.7)",
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
                  <a
                    key={index}
                    href={social.href}
                    style={{
                      display: "inline-block",
                      padding: "8px",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${social.color}15`;
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      style={{
                        width: 24,
                        height: 24,
                        filter: `brightness(0) saturate(100%) invert(0%)`,
                      }}
                    />
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
