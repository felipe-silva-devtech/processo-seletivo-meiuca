import React from "react";

import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <StyledButton type="button" bg="brand.primary.01" {...props}>
      {children ? children : label}
    </StyledButton>
  );
};
