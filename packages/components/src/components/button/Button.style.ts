import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled("button")<ButtonProps>`
  ${basicProps}

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  border-radius: ${({ theme }) => theme.radii.none};
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.space.squish.sm};
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.neutral["05"]};
  background-color: ${({ theme }) => theme.colors.brand.primary["03"]};

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.primary["02"]};
  }
`;
