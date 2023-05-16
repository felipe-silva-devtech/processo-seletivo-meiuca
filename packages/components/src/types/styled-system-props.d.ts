import React from "react";
import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  OpacityProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  BordersProps,
  BackgroundProps,
  PositionProps,
} from "styled-system";

export type StyledSystemProps = SpaceProps &
  Omit<ColorProps, "color"> &
  TypographyProps &
  OpacityProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  BordersProps &
  BackgroundProps &
  PositionProps;

export type ComponentWithStyledSystem = StyledSystemProps &
  React.PropsWithChildren;
