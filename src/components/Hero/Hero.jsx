import { Box, Typography, Button } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  useResponsive,
} from "../index";

const Hero = () => {
  const { isMobile, isTablet } = useResponsive();

  // Decorative star component
  const DecorativeStar = ({ size = 24, filled = true, sx = {} }) => {
    const StarIcon = filled ? Star : StarBorder;
    return (
      <StarIcon
        sx={{
          color: "primary.main",
          fontSize: size,
          ...sx,
        }}
      />
    );
  };

  return (
    <ResponsiveSection
      sx={{
        minHeight: { xs: "calc(100vh - 80px)", sm: "calc(100vh - 100px)" },
        background: "linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Stars */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "15%", sm: "20%" },
          right: { xs: "10%", sm: "15%", md: "20%" },
          zIndex: 1,
        }}
      >
        <DecorativeStar size={isMobile ? 32 : 48} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "25%", sm: "30%" },
          left: { xs: "5%", sm: "8%", md: "10%" },
          zIndex: 1,
        }}
      >
        <DecorativeStar size={isMobile ? 24 : 32} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "15%", sm: "20%" },
          right: { xs: "8%", sm: "12%", md: "15%" },
          zIndex: 1,
        }}
      >
        <DecorativeStar size={isMobile ? 20 : 28} />
      </Box>

      <ResponsiveContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: { xs: "70vh", sm: "75vh", md: "80vh" },
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              mb: 3,
              maxWidth: { xs: "100%", sm: 800, md: 900 },
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.5rem",
              },
              lineHeight: { xs: 1.1, sm: 1.2 },
              letterSpacing: { xs: "-0.02em", md: "-0.03em" },
            }}
          >
            Transforming Ideas{" "}
            <Box
              component="span"
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <DecorativeStar
                size={isMobile ? 32 : isTablet ? 40 : 48}
                sx={{
                  position: "absolute",
                  top: { xs: -8, sm: -12, md: -16 },
                  right: { xs: -16, sm: -20, md: -24 },
                  transform: "rotate(15deg)",
                }}
              />
            </Box>
            <br />
            Into Impactful Advertising
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: { xs: "100%", sm: 600, md: 700 },
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            We specialize in delivering innovative advertising solutions across
            multiple platforms, helping brands connect with audiences at every
            touchpoint. With creative strategies and end-to-end execution,
            Shyamji Advertisement is your trusted partner for building lasting
            visibility.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 8px 24px rgba(25, 118, 210, 0.3)",
              "&:hover": {
                boxShadow: "0 12px 32px rgba(25, 118, 210, 0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Explore Services
          </Button>
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default Hero;
