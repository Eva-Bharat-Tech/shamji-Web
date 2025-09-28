import { Container, Box } from "@mui/material";

/**
 * ResponsiveContainer - A wrapper component that provides consistent responsive padding and max-widths
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.maxWidth - Maximum width (xs, sm, md, lg, xl, false)
 * @param {Object} props.sx - Additional styles
 * @param {boolean} props.disableGutters - Remove default padding
 */
const ResponsiveContainer = ({
  children,
  maxWidth = "lg",
  sx = {},
  disableGutters = false,
  ...props
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        px: disableGutters ? 0 : { xs: 2, sm: 3, md: 4 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ResponsiveContainer;
