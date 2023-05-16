import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";

export const StyledButton = styled("button")`
  ${basicProps}

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  border-radius: ${({ theme }) => theme.radii.none};
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.space.squish.xs};
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.neutral["05"]};
  background-color: ${({ theme }) => theme.colors.brand.primary["03"]};

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.primary["02"]};
  }
`;
