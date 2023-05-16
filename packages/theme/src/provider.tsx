import React from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  Global as EmotionGlobal,
  css,
} from "@emotion/react";
import { Theme } from "./theme";

interface ThemeProviderProps extends React.PropsWithChildren {
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => (
  <EmotionThemeProvider theme={theme}>
    <EmotionGlobal
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap");
      `}
    />
    {children}
  </EmotionThemeProvider>
);
