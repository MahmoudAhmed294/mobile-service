
import { TypographyOptions } from "@mui/material/styles/createTypography";


  
function pxToRem(value:number) {
    return `${value / 16}rem`;
  }
  
  const typography:TypographyOptions  = {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
      fontWeight: 600,
      lineHeight: 80 / 64,
      fontSize: pxToRem(24),
    },
    h2: {
      fontWeight: 600,
      lineHeight: 64 / 48,
      fontSize: pxToRem(22),
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    h6: {
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: pxToRem(16),
    },
    subtitle1: {
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      fontWeight: 400,
    },
    subtitle2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
      fontWeight: 600,
    },
    body1: {
      fontSize: pxToRem(16),
    },
    body2: {
      fontSize: pxToRem(14),
    },
    caption: {
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      letterSpacing: 1.1,
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 600,
      lineHeight: 24 / 14,
      letterSpacing:1.25,
      fontSize: pxToRem(16),
      textTransform: "capitalize",
      textDecoration: "none"

    },
  };
  
  export default typography;
  