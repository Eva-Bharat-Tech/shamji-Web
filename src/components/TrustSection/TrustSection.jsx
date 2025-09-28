import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, ResponsiveSection } from "../index";

const TrustSection = () => {
  return (
    <ResponsiveSection
      sx={{
        py: { xs: 3, sm: 4, md: 5 },
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <ResponsiveContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Decorative Lines */}
          <Box
            sx={{
              flex: 1,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #1976d2 50%, transparent 100%)",
              maxWidth: { xs: 60, sm: 100, md: 150 },
            }}
          />

          {/* Trust Text */}
          <Typography
            variant="h6"
            sx={{
              mx: { xs: 3, sm: 4, md: 5 },
              fontWeight: 700,
              color: "text.primary",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              letterSpacing: { xs: "0.1em", sm: "0.15em" },
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Trusted by Amazing Brands
          </Typography>

          {/* Decorative Lines */}
          <Box
            sx={{
              flex: 1,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #1976d2 50%, transparent 100%)",
              maxWidth: { xs: 60, sm: 100, md: 150 },
            }}
          />
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default TrustSection;
