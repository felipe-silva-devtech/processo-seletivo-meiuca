import * as tokens from "@psm/tokens";

export const theme = {
  lineHeights: {
    tight: tokens.lineHeightTight,
    medium: tokens.lineHeightMedium,
    distant: tokens.lineHeightDistant,
    superdistant: tokens.lineHeightSuperdistant,
  },
  fontSizes: {
    xxxs: tokens.fontSizeXxxs,
    xxs: tokens.fontSizeXxs,
    xs: tokens.fontSizeXs,
    sm: tokens.fontSizeSm,
    md: tokens.fontSizeMd,
    lg: tokens.fontSizeLg,
    xl: tokens.fontSizeXl,
    xxl: tokens.fontSizeXxl,
    xxxl: tokens.fontSizeXxxl,
    display: tokens.fontSizeDisplay,
    giant: tokens.fontSizeGiant,
  },
  radii: {
    none: tokens.borderRadiusNone,
    sm: tokens.borderRadiusSm,
    md: tokens.borderRadiusMd,
    lg: tokens.borderRadiusLg,
    pill: tokens.borderRadiusPill,
    circular: tokens.borderRadiusCircular,
  },
  borderWidths: {
    none: tokens.borderWidthNone,
    hairline: tokens.borderWidthHairline,
    thin: tokens.borderWidthThin,
    thick: tokens.borderWidthThick,
    heavy: tokens.borderWidthHeavy,
  },
  opacity: {
    semiopaque: tokens.opacityLevelSemiopaque,
    intense: tokens.opacityLevelIntense,
    medium: tokens.opacityLevelMedium,
    light: tokens.opacityLevelLight,
    semitransparent: tokens.opacityLevelSemitransparent,
  },
  shadows: {
    "01": tokens.shadowLevel1Stack,
    "02": tokens.shadowLevel2Stack,
    "03": tokens.shadowLevel3Stack,
    "04": tokens.shadowLevel4Stack,
  },
  space: {
    stack: {
      quarck: tokens.spacingStackQuarck,
      nano: tokens.spacingStackNano,
      xxxs: tokens.spacingStackXxxs,
      xxs: tokens.spacingStackXxs,
      xs: tokens.spacingStackXs,
      sm: tokens.spacingStackSm,
      md: tokens.spacingStackMd,
      lg: tokens.spacingStackLg,
      xl: tokens.spacingStackXl,
      xxl: tokens.spacingStackXxl,
      xxxl: tokens.spacingStackXxxl,
      huge: tokens.spacingStackHuge,
      giant: tokens.spacingStackGiant,
    },
    inset: {
      quarck: tokens.spacingInsetQuarck,
      nano: tokens.spacingInsetNano,
      xs: tokens.spacingInsetXs,
      sm: tokens.spacingInsetSm,
      md: tokens.spacingInsetMd,
      lg: tokens.spacingInsetLg,
    },
    squish: {
      quarck: tokens.spacingSquishQuarckStack,
      nano: tokens.spacingSquishNanoStack,
      xs: tokens.spacingSquishXsStack,
      sm: tokens.spacingSquishSmStack,
    },
    inline: {
      quarck: tokens.spacingInlineQuarck,
      nano: tokens.spacingInlineNano,
      xxxs: tokens.spacingInlineXxxs,
      xxs: tokens.spacingInlineXxs,
      xs: tokens.spacingInlineXs,
      sm: tokens.spacingInlineSm,
      md: tokens.spacingInlineMd,
      lg: tokens.spacingInlineLg,
      xl: tokens.spacingInlineXl,
    },
  },
  fonts: {
    highlight: tokens.fontFamilyHighlight,
  },
  fontWeights: {
    bold: tokens.fontWeightBold,
    medium: tokens.fontWeightMedium,
    regular: tokens.fontWeightRegular,
  },
  colors: {
    neutral: {
      "01": tokens.colorNeutral1,
      "02": tokens.colorNeutral2,
      "03": tokens.colorNeutral3,
      "04": tokens.colorNeutral4,
      "05": tokens.colorNeutral5,
    },
    brand: {
      primary: {
        "01": tokens.colorBrandPrimary1,
        "02": tokens.colorBrandPrimary2,
        "03": tokens.colorBrandPrimary3,
        "04": tokens.colorBrandPrimary4,
        "05": tokens.colorBrandPrimary5,
      },
    },
  },
};

export type Theme = typeof theme;
