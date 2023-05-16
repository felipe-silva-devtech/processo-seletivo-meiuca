import React from "react";

import { StyledSubtitle } from "./Subtitle.style";
import { SubtitleProps } from "./Subtitle.types";

export const Subtitle: React.FC<SubtitleProps> = ({
  children,
  content = "",
  ...props
}) => {
  return (
    <StyledSubtitle {...props}>{children ? children : content}</StyledSubtitle>
  );
};
