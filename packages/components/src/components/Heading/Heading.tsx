import React from "react";

import { StyledHeading } from "./Heading.style";
import { HeadingProps } from "./Heading.types";

export const Heading: React.FC<HeadingProps> = ({
  children,
  content = "",
  ...props
}) => {
  return (
    <StyledHeading {...props}>{children ? children : content}</StyledHeading>
  );
};
