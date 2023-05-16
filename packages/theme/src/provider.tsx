import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Theme } from "./theme";

interface ThemeProviderProps extends React.PropsWithChildren {
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
