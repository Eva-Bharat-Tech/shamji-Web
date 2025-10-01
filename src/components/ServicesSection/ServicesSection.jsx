import { Box, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

// Import custom service icons
import BillboardIcon from "../../assets/icons/Billboard.svg";
import CarIcon from "../../assets/icons/Car.svg";
import IndoorIcon from "../../assets/icons/Indoor.svg";
import CubeIcon from "../../assets/icons/3dCube.svg";
import SEOIcon from "../../assets/icons/SEO.svg";
import PerformanceIcon from "../../assets/icons/performance.svg";
import SupportIcon from "../../assets/icons/support.svg";

const ServicesSection = () => {
  const { isMobile } = useResponsive();

  // Services data
  const services = [
    [
      {
        icon: BillboardIcon,
        title: "High-Impact Digital Billboards",
        description:
          "Dynamic displays on prime city spots that capture attention instantly.",
      },
      {
        icon: CarIcon,
        title: "Taxi Top Screens",
        description:
          "Dynamic displays on prime city spots that capture attention instantly.",
      },
    ],
    [
      {
        icon: IndoorIcon,
        title: "Indoor Digital Standees",
        description:
          "Eye-catching displays in malls, airports, and events to engage audiences up close.",
      },
      {
        icon: CubeIcon,
        title: "Unique 3D Billboards",
        description:
          "Immersive visuals that create unforgettable brand experiences and viral moments.",
      },
    ],
    [
      {
        icon: SEOIcon,
        title: "SEO That Drives Results",
        description:
          "From keyword research to link building, we help you rank higher and attract the right audience.",
      },
      {
        icon: PerformanceIcon,
        title: "Performance Optimization",
        description:
          "Faster load times, responsive design, and seamless user journeys for better engagement.",
      },
    ],
    [
      {
        icon: BillboardIcon,
        title: "Custom Web Design",
        description:
          "Beautiful, user-friendly websites tailored to reflect your brand and convert visitors into customers.",
      },
      {
        icon: SupportIcon,
        title: "Ongoing Support & Updates",
        description:
          "Continuous improvements to keep your website fresh, relevant, and competitive.",
      },
    ],
  ];

  // Service card component
  const ServiceCard = ({ service, index }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        p: 0,
        height: "100%",
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 48, sm: 56, md: 64 },
          height: { xs: 48, sm: 56, md: 64 },
        }}
      >
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          color: "text.primary",
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          lineHeight: 1.3,
          fontWeight: 600,
          mb: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        {service.title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        {service.description}
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
                Delivering Impactful & <br />
                Future-Ready Digital <br />
                Advertising Solutions
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
                  A subscription with us takes away the hassle of managing
                  multiple vendors, budgeting complexities, or making design
                  calls on your own. Acting as your creative partner, we ensure
                  every campaign amplifies your brand presence and drives
                  meaningful impact.
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
            {services.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: 2, sm: 3, md: 4 },
                }}
              >
                {item.map((service, index) => (
                  <ResponsiveGrid
                    key={index}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 2, sm: 3, md: 4 },
                      minHeight: { xs: 200, sm: 250, md: 280 },
                    }}
                  >
                    <ServiceCard service={service} index={index} />
                  </ResponsiveGrid>
                ))}
              </Box>
            ))}
          </ResponsiveGridContainer>
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default ServicesSection;
