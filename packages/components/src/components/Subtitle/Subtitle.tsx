import React from "react";

import { StyledSubtitle } from "./Subtitle.style";

export const Subtitle = ({ children, content = "", ...props }) => {
  return (
    <StyledSubtitle {...props}>{children ? children : content}</StyledSubtitle>
  );
};
