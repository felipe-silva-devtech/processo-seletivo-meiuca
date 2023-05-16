import React from "react";

import { StyledShape } from "./Shape.style";
import { ShapeProps } from "./Shape.types";

export const Shape: React.FC<ShapeProps> = ({ children, ...props }) => {
  return <StyledShape {...props}>{children}</StyledShape>;
};
