import React from "react";

import { StyledShape } from "./Shape.style";

export const Shape = ({ children, ...props }) => {
  return <StyledShape {...props}>{children}</StyledShape>;
};
