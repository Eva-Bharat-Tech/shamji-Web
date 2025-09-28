import { Box } from "@mui/material";

/**
 * ResponsiveSection - A section component with responsive padding and spacing
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.component - HTML element to render (default: 'section')
 * @param {Object} props.sx - Additional styles
 * @param {boolean} props.fullHeight - Make section full viewport height
 * @param {string} props.bgColor - Background color
 */
const ResponsiveSection = ({
  children,
  component = "section",
  sx = {},
  fullHeight = false,
  bgColor,
  ...props
}) => {
  return (
    <Box
      component={component}
      sx={{
        py: { xs: 4, sm: 6, md: 8 }, // Responsive vertical padding
        ...(fullHeight && { minHeight: "100vh" }),
        ...(bgColor && { backgroundColor: bgColor }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ResponsiveSection;
