import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";
import { HeadingProps } from "./Heading.types";

export const StyledHeading = styled("h1")<HeadingProps>`
  ${basicProps}

  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.distant};
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral["01"]};
`;
