import React from "react";

import { StyledButton } from "./Button.style";

export const Button = ({ children, label = "", ...props }) => {
  return <StyledButton {...props}>{children ? children : label}</StyledButton>;
};
