import { Box, Typography } from "@mui/material";
import { AllInclusive, Bolt, CameraAlt, Movie } from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

const ServicesSection = () => {
  const { isMobile } = useResponsive();

  // Services data
  const services = [
    {
      icon: AllInclusive,
      title:
        "Premium billboards, transit ads, and street branding for maximum visibility.",
      description: "",
    },
    {
      icon: Bolt,
      title:
        "Engaging campaigns across social media, digital screens, and online platforms.",
      description: "",
    },
    {
      icon: CameraAlt,
      title:
        "Creative on-ground activations and events designed to build deep audience connections.",
      description: "",
    },
    {
      icon: Movie,
      title:
        "Immersive cinema advertising that captures audience attention at scale.",
      description: "",
    },
  ];

  // Service card component
  const ServiceCard = ({ service, index }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        textAlign: { xs: "center", sm: "left" },
        p: { xs: 2, sm: 3, md: 4 },
        height: "100%",
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <service.icon
          sx={{
            fontSize: { xs: 48, sm: 56, md: 64 },
            color: "primary.main",
          }}
        />
      </Box>

      {/* Title/Description */}
      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 1.6,
          fontWeight: 400,
          maxWidth: { xs: "100%", sm: 300, md: 350 },
        }}
      >
        {service.title}
      </Typography>
    </Box>
  );

  return (
    <ResponsiveSection
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <ResponsiveContainer>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              letterSpacing: "0.1em",
              mb: 2,
              display: "block",
            }}
          >
            OUR SERVICES
          </Typography>

          <ResponsiveGridContainer spacing={{ xs: 3, sm: 4, md: 6 }}>
            {/* Left Column - Main Heading */}
            <ResponsiveGrid xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "text.primary",
                  fontSize: {
                    xs: "2.2rem",
                    sm: "2.8rem",
                    md: "3.2rem",
                    lg: "3.6rem",
                  },
                  lineHeight: { xs: 1.1, sm: 1.2 },
                  letterSpacing: { xs: "-0.02em", md: "-0.03em" },
                  mb: { xs: 3, md: 0 },
                }}
              >
                Delivering Creative & <br />
                Innovative Advertising <br />
                Solutions
              </Typography>
            </ResponsiveGrid>

            {/* Right Column - Description */}
            <ResponsiveGrid xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  height: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  A subscription can alleviate the stress of staffing, managing
                  expenses, or make design calls like a Creative Director. We
                  partner with you to ensure that your design elevates your
                  brand to new levels.
                </Typography>
              </Box>
            </ResponsiveGrid>
          </ResponsiveGridContainer>
        </Box>

        {/* Services Grid */}
        <Box>
          <ResponsiveGridContainer
            spacing={{ xs: 3, sm: 4, md: 6 }}
            sx={{
              mt: { xs: 4, sm: 6, md: 8 },
            }}
          >
            {services.map((service, index) => (
              <ResponsiveGrid
                key={index}
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  minHeight: { xs: 200, sm: 250, md: 300 },
                }}
              >
                <ServiceCard service={service} index={index} />
              </ResponsiveGrid>
            ))}
          </ResponsiveGridContainer>
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default ServicesSection;
