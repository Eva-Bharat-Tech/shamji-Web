import { Box, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";
import marketingIcon from "../../assets/marketing.svg";
import usersIcon from "../../assets/users-avatar.svg";
import cityscapeIcon from "../../assets/cityscape.svg";

const AboutSection = () => {
  const { isMobile, isTablet } = useResponsive();

  // Statistics data
  const statistics = [
    {
      iconSrc: marketingIcon,
      number: "300+",
      label: "Successful Campaigns",
      color: "#b9ceed", // Light blue
    },
    {
      iconSrc: usersIcon,
      number: "150+",
      label: "Happy Clients",
      color: "#b9ceed", // Light blue
    },
    {
      iconSrc: cityscapeIcon,
      number: "40+",
      label: "Cities",
      color: "#b9ceed", // Light blue
    },
  ];

  // Statistic component
  const StatisticItem = ({ stat, index, showArrow }) => (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          textAlign: "start",
          position: "relative",
          minHeight: { xs: 120, sm: 160, md: 240 },
        }}
      >
        {/* Icon Circle */}
        <Box
          sx={{
            width: { xs: 50, sm: 70, md: 100 },
            height: { xs: 50, sm: 70, md: 100 },
            borderRadius: "50%",
            backgroundColor: stat.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 1.5, sm: 2, md: 4 },
            position: "relative",
          }}
        >
          <img
            src={stat.iconSrc}
            alt={stat.label}
            style={{
              width: isMobile ? "24px" : isTablet ? "35px" : "48px",
              height: isMobile ? "24px" : isTablet ? "35px" : "48px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Number */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.2rem" },
            mb: { xs: 0.5, sm: 0.8, md: 1 },
          }}
        >
          {stat.number}
        </Typography>

        {/* Label */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "text.primary",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.1rem" },
            maxWidth: { xs: 80, sm: 120, md: 180 },
            lineHeight: 1.2,
          }}
        >
          {stat.label}
        </Typography>
      </Box>
      {showArrow && (
        <Box
          sx={{
            alignSelf: "flex-start",
            marginTop: { xs: 2, sm: 0, md: 5 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isMobile ? "60" : isTablet ? "100" : "180"}
            height={isMobile ? "10" : isTablet ? "12" : "15"}
            viewBox="0 0 331 15"
            fill="none"
          >
            <path
              d="M6 12.8333C8.94552 12.8333 11.3333 10.4455 11.3333 7.5C11.3333 4.55448 8.94552 2.16667 6 2.16667C3.05448 2.16667 0.666667 4.55448 0.666667 7.5C0.666667 10.4455 3.05448 12.8333 6 12.8333ZM330.707 8.20711C331.098 7.81658 331.098 7.18342 330.707 6.79289L324.343 0.428932C323.953 0.0384078 323.319 0.0384078 322.929 0.428932C322.538 0.819457 322.538 1.45262 322.929 1.84315L328.586 7.5L322.929 13.1569C322.538 13.5474 322.538 14.1805 322.929 14.5711C323.319 14.9616 323.953 14.9616 324.343 14.5711L330.707 8.20711ZM6 7.5V8.5L330 8.5V7.5V6.5L6 6.5V7.5Z"
              fill="#1A5EC6"
            />
          </svg>
        </Box>
      )}
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
        <Box sx={{ mb: { xs: 4, sm: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              letterSpacing: "0.1em",
              mb: { xs: 1, sm: 2 },
              display: "block",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            ABOUT US
          </Typography>

          <ResponsiveGridContainer spacing={{ xs: 3, sm: 4, md: 6 }}>
            {/* Left Column - Main Heading */}
            <ResponsiveGrid xs={12} sm={6} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "text.primary",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                  lineHeight: { xs: 1.1, sm: 1.2 },
                  letterSpacing: { xs: "-0.01em", md: "-0.03em" },
                  textAlign: { xs: "center", sm: "left", md: "left" },
                  mb: { xs: 2, sm: 0, md: 0 },
                }}
              >
                Creative Marketing. <br />
                Powerful Reach. Lasting <br />
                Visibility.
              </Typography>
            </ResponsiveGrid>

            {/* Right Column - Description */}
            <ResponsiveGrid xs={12} sm={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "center", md: "center" },
                  height: "100%",
                  mt: { xs: 2, sm: 0, md: 0 },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
                    lineHeight: 1.5,
                    fontWeight: 400,
                    textAlign: { xs: "center", sm: "left", md: "left" },
                    px: { xs: 1, sm: 0, md: 0 },
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
        <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
          <ResponsiveGridContainer
            spacing={{ xs: 2, sm: 6, md: 8 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {statistics.map((stat, index) => (
              <ResponsiveGrid
                key={index}
                xs={4}
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
