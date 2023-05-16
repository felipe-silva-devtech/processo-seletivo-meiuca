import React from "react";

import { StyledHeading } from "./Heading.style";

export const Heading = ({ children, content = "", ...props }) => {
  return (
    <StyledHeading {...props}>{children ? children : content}</StyledHeading>
  );
};
