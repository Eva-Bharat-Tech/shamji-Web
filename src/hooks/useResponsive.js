import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

/**
 * Custom hook for responsive design utilities
 * @returns {Object} Responsive utilities and breakpoint checks
 */
export const useResponsive = () => {
  const theme = useTheme();

  // Breakpoint checks
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 0-767px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 768-1023px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // 1024px+

  // Specific breakpoint checks
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  // Up/down breakpoint checks
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));

  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlDown = useMediaQuery(theme.breakpoints.down("xl"));

  // Get current breakpoint name
  const getCurrentBreakpoint = () => {
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    return "xs";
  };

  // Responsive value selector
  const getResponsiveValue = (values) => {
    const breakpoint = getCurrentBreakpoint();
    return values[breakpoint] || values.xs || values;
  };

  return {
    // Main breakpoint categories
    isMobile,
    isTablet,
    isDesktop,

    // Specific breakpoints
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,

    // Up/down queries
    isSmUp,
    isMdUp,
    isLgUp,
    isXlUp,
    isSmDown,
    isMdDown,
    isLgDown,
    isXlDown,

    // Utilities
    getCurrentBreakpoint,
    getResponsiveValue,
    theme,
  };
};
