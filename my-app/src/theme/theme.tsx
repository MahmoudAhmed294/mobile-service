import React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import { button ,input , select } from "./components";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const themeOptions:any = {
    direction: "ltr",
    typography: {
      fontFamily: "Montserrat",
      ...typography,
    },
    components: {
      ...button,
      ...input,
      ...select
    },
    palette,
  };

  let theme = createTheme({ ...themeOptions });
  theme = responsiveFontSizes(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
