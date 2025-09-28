import { Box, Typography } from "@mui/material";
import {
  Layers,
  QuestionAnswer,
  Circle,
  HourglassEmpty,
  Terminal,
} from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

const BrandShowcase = () => {
  const { isMobile, isTablet } = useResponsive();

  // Brand data with custom icons and styling
  const brands = [
    {
      name: "Layers",
      icon: Layers,
      customIcon: null,
    },
    {
      name: "Quotient",
      icon: QuestionAnswer,
      customIcon: null,
    },
    {
      name: "Circooles",
      icon: Circle,
      customIcon: null,
    },
    {
      name: "Hourglass",
      icon: HourglassEmpty,
      customIcon: null,
    },
    {
      name: "Command+R",
      icon: Terminal,
      customIcon: null,
    },
  ];

  // Custom logo components to match the design
  const LayersLogo = ({ sx = {} }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: 24, sm: 28, md: 32 },
          height: { xs: 24, sm: 28, md: 32 },
          backgroundColor: "text.primary",
          borderRadius: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Layers sx={{ color: "white", fontSize: { xs: 14, sm: 16, md: 18 } }} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Layers
      </Typography>
    </Box>
  );

  const QuotientLogo = ({ sx = {} }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: 32, sm: 36, md: 40 },
          height: { xs: 32, sm: 36, md: 40 },
          border: "3px solid",
          borderColor: "text.primary",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "60%",
            backgroundColor: "text.primary",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Quotient
      </Typography>
    </Box>
  );

  const CircoolesLogo = ({ sx = {} }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        ...sx,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Circle
          sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: "text.primary" }}
        />
        <Circle
          sx={{ fontSize: { xs: 16, sm: 18, md: 20 }, color: "text.primary" }}
        />
        <Circle
          sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: "text.primary" }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Circooles
      </Typography>
    </Box>
  );

  const HourglassLogo = ({ sx = {} }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: 28, sm: 32, md: 36 },
          height: { xs: 28, sm: 32, md: 36 },
          backgroundColor: "text.primary",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HourglassEmpty
          sx={{ color: "white", fontSize: { xs: 16, sm: 18, md: 20 } }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Hourglass
      </Typography>
    </Box>
  );

  const CommandRLogo = ({ sx = {} }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: 32, sm: 36, md: 40 },
          height: { xs: 32, sm: 36, md: 40 },
          backgroundColor: "text.primary",
          transform: "skew(-15deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Terminal
          sx={{
            color: "white",
            fontSize: { xs: 16, sm: 18, md: 20 },
            transform: "skew(15deg)",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        Command+R
      </Typography>
    </Box>
  );

  const logoComponents = [
    LayersLogo,
    QuotientLogo,
    CircoolesLogo,
    HourglassLogo,
    CommandRLogo,
  ];

  return (
    <ResponsiveSection
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "background.default",
      }}
    >
      <ResponsiveContainer>
        {/* Brand Logos Grid */}
        <ResponsiveGridContainer
          spacing={{ xs: 3, sm: 4, md: 6 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {logoComponents.map((LogoComponent, index) => (
            <ResponsiveGrid
              key={index}
              xs={6}
              sm={4}
              md={2.4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: { xs: 60, sm: 70, md: 80 },
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <LogoComponent />
              </Box>
            </ResponsiveGrid>
          ))}
        </ResponsiveGridContainer>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default BrandShowcase;
