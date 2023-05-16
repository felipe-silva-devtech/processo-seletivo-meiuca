import * as tokens from "@psm/tokens";

export const theme = {
  colors: {
    neutral: {
      "01": tokens.neutralColor1,
      "02": tokens.neutralColor2,
      "03": tokens.neutralColor3,
      "04": tokens.neutralColor4,
      "05": tokens.neutralColor5,
    },
    brand: {
      primary: {
        "01": tokens.brandColorPrimary1,
        "02": tokens.brandColorPrimary2,
        "03": tokens.brandColorPrimary3,
        "04": tokens.brandColorPrimary4,
        "05": tokens.brandColorPrimary5,
      },
    },
  },
};

export type Theme = typeof theme;
