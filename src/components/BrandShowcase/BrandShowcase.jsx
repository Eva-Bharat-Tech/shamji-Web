import { Box, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";

// Import brand logos
import AllenLogo from "../../assets/Images/Allen.png";
import AmityLogo from "../../assets/Images/Amity.png";
import BurgerKingLogo from "../../assets/Images/Burgerking.png";
import DhristiLogo from "../../assets/Images/Dhristi.png";
import ManglamLogo from "../../assets/Images/manglams.png";
import MayoorLogo from "../../assets/Images/Mayoorlogo.png";
import MountLiteraLogo from "../../assets/Images/MountLitera.png";
import OswalSoapLogo from "../../assets/Images/Oswalsoap.png";
import SoganiLogo from "../../assets/Images/Soganilogo.png";

const BrandShowcase = () => {
  const { isMobile, isTablet } = useResponsive();

  // Brand data with actual PNG logos
  const brands = [
    {
      name: "Amity University",
      logo: AmityLogo,
      alt: "Amity University Logo",
    },
    {
      name: "Sogani Group",
      logo: SoganiLogo,
      alt: "Sogani Group Logo",
    },
    {
      name: "Mayoor School",
      logo: MayoorLogo,
      alt: "Mayoor School Logo",
    },
    {
      name: "Allen",
      logo: AllenLogo,
      alt: "Allen Logo",
    },
    {
      name: "Burger King",
      logo: BurgerKingLogo,
      alt: "Burger King Logo",
    },
    {
      name: "Dhristi",
      logo: DhristiLogo,
      alt: "Dhristi Logo",
    },
    {
      name: "Oswal Soap",
      logo: OswalSoapLogo,
      alt: "Oswal Soap Logo",
    },

    {
      name: "Manglam",
      logo: ManglamLogo,
      alt: "Manglam Logo",
    },
    {
      name: "Mount Litera",
      logo: MountLiteraLogo,
      alt: "Mount Litera Logo",
    },
  ];

  return (
    <ResponsiveSection
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <ResponsiveContainer>
        {/* Brand Logos Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: "100%",
            overflowX: "auto",
            borderRadius: "24px",
            background: "#FFF",
            boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {brands.map((brand, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: 50, sm: 60, md: 80 },
                minWidth: { xs: 60, sm: 80, md: 100 },
                flexShrink: 0,
              }}
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                style={{
                  maxHeight: isMobile ? "35px" : isTablet ? "45px" : "55px",
                  maxWidth: isMobile ? "70px" : isTablet ? "90px" : "110px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default BrandShowcase;
