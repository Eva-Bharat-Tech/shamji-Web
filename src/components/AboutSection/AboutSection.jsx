import { Box, Typography } from "@mui/material";
import {
  Campaign,
  Group,
  LocationCity,
  ArrowForward,
} from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

const AboutSection = () => {
  const { isMobile, isTablet } = useResponsive();

  // Statistics data
  const statistics = [
    {
      icon: Campaign,
      number: "300+",
      label: "Successful Campaigns",
      color: "#93C5FD", // Light blue
    },
    {
      icon: Group,
      number: "150+",
      label: "Happy Clients",
      color: "#93C5FD", // Light blue
    },
    {
      icon: LocationCity,
      number: "40+",
      label: "Cities",
      color: "#93C5FD", // Light blue
    },
  ];

  // Statistic component
  const StatisticItem = ({ stat, index, showArrow }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Icon Circle */}
      <Box
        sx={{
          width: { xs: 80, sm: 100, md: 120 },
          height: { xs: 80, sm: 100, md: 120 },
          borderRadius: "50%",
          backgroundColor: stat.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 2, sm: 3, md: 4 },
          position: "relative",
        }}
      >
        <stat.icon
          sx={{
            fontSize: { xs: 32, sm: 40, md: 48 },
            color: "#1976d2", // Primary blue for icons
          }}
        />

        {/* Connecting Arrow - Only show on desktop and not for last item */}
        {showArrow && !isMobile && !isTablet && (
          <ArrowForward
            sx={{
              position: "absolute",
              right: { md: -60, lg: -80 },
              fontSize: { md: 32, lg: 40 },
              color: "#1976d2",
              zIndex: 1,
            }}
          />
        )}
      </Box>

      {/* Number */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "text.primary",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          mb: 1,
        }}
      >
        {stat.number}
      </Typography>

      {/* Label */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "text.primary",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
          maxWidth: { xs: 150, sm: 180, md: 200 },
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  );

  return (
    <ResponsiveSection
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "background.paper",
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
            ABOUT US
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
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                  lineHeight: { xs: 1.1, sm: 1.2 },
                  letterSpacing: { xs: "-0.02em", md: "-0.03em" },
                }}
              >
                Creative Marketing. <br />
                Powerful Reach. Lasting <br />
                Visibility.
              </Typography>
            </ResponsiveGrid>

            {/* Right Column - Description */}
            <ResponsiveGrid xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  height: "100%",
                  mt: { xs: 2, md: 0 },
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
                  With years of expertise in brand visibility, media innovation,
                  and creative storytelling, we empower businesses to expand
                  their presence, engage audiences, and stay ahead in
                  competitive markets.
                </Typography>
              </Box>
            </ResponsiveGrid>
          </ResponsiveGridContainer>
        </Box>

        {/* Statistics Section */}
        <Box>
          <ResponsiveGridContainer
            spacing={{ xs: 4, sm: 6, md: 8 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {statistics.map((stat, index) => (
              <ResponsiveGrid
                key={index}
                xs={12}
                sm={4}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StatisticItem
                  stat={stat}
                  index={index}
                  showArrow={index < statistics.length - 1}
                />
              </ResponsiveGrid>
            ))}
          </ResponsiveGridContainer>
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default AboutSection;
