import { ComponentWithStyledSystem } from "../../types/styled-system-props";

export type CardProps = ComponentWithStyledSystem & {
  heading?: string;
  subtitle?: string;
  paragraph?: string;
  buttonLabel?: string;
};
