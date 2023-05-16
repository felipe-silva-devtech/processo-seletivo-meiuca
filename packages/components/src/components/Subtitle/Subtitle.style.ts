import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";
import { SubtitleProps } from "./Subtitle.types";

export const StyledSubtitle = styled("h2")<SubtitleProps>`
  ${basicProps}

  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.neutral["02"]};
`;
