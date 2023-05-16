import React from "react";

import { StyledParagraph } from "./Paragraph.style";

export const Paragraph = ({ children, content = "", ...props }) => {
  return (
    <StyledParagraph {...props}>
      {children ? children : content}
    </StyledParagraph>
  );
};
