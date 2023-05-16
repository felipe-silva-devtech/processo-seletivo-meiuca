import styled from "@emotion/styled";
import { basicProps } from "../../utils/styled-system-utils";
import { ShapeProps } from "./Shape.types";

export const StyledShape = styled("div")<ShapeProps>`
  ${basicProps}

  border-radius: ${({ theme }) => theme.radii.none};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths.thin};
  border-color: ${({ theme }) => theme.colors.neutral["04"]};
  padding: ${({ theme }) => theme.space.inset.lg};
  background-color: ${({ theme }) => theme.colors.neutral["05"]};

  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
`;
