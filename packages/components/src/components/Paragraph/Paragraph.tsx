import React from "react";

import { StyledParagraph } from "./Paragraph.style";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  content = "",
  ...props
}) => {
  return (
    <StyledParagraph {...props}>
      {children ? children : content}
    </StyledParagraph>
  );
};
