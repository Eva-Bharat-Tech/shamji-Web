import { Grid } from "@mui/material";

/**
 * ResponsiveGrid - A wrapper around Material-UI's Grid with responsive breakpoint props
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {number|Object} props.xs - Grid size for mobile (xs breakpoint)
 * @param {number|Object} props.sm - Grid size for tablet (sm breakpoint)
 * @param {number|Object} props.md - Grid size for desktop (md breakpoint)
 * @param {Object} props.sx - Additional styles
 */
const ResponsiveGrid = ({ children, xs = 12, sm, md, sx = {}, ...props }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} sx={sx} {...props}>
      {children}
    </Grid>
  );
};

/**
 * ResponsiveGridContainer - Container for responsive grid items
 */
export const ResponsiveGridContainer = ({
  children,
  spacing = 2,
  sx = {},
  ...props
}) => {
  return (
    <Grid
      container
      spacing={{
        xs: typeof spacing === "number" ? spacing : spacing.xs || 2,
        sm: typeof spacing === "number" ? spacing : spacing.sm || 3,
        md: typeof spacing === "number" ? spacing : spacing.md || 4,
      }}
      sx={sx}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default ResponsiveGrid;
