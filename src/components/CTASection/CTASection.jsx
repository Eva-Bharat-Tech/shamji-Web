import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  useResponsive,
} from "../index";

const CTASection = () => {
  const { isMobile } = useResponsive();

  return (
    <ResponsiveSection
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "#2E2E2E", // Dark gray background
        borderRadius: { xs: 3, sm: 4, md: 5 },
        mx: { xs: 2, sm: 3, md: 4 },
        mb: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <ResponsiveContainer>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: { xs: 1.1, sm: 1.2 },
              letterSpacing: { xs: "-0.02em", md: "-0.03em" },
              mb: 3,
              maxWidth: { xs: "100%", sm: 600, md: 700 },
            }}
          >
            Become part of the Marketing revolution
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              lineHeight: 1.6,
              fontWeight: 400,
              mb: 4,
              maxWidth: { xs: "100%", sm: 500, md: 600 },
            }}
          >
            Contact to our team and start requesting designs right away!
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              borderRadius: 3,
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: "primary.main",
              boxShadow: "0 8px 24px rgba(25, 118, 210, 0.3)",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: "0 12px 32px rgba(25, 118, 210, 0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact Now
          </Button>
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default CTASection;
