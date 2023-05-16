import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";
import { ParagraphProps } from "./Paragraph.types";

export const StyledParagraph = styled("p")<ParagraphProps>`
  ${basicProps}

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.distant};
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral["02"]};
`;
