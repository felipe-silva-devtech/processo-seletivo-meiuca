import "@emotion/react";
import { Theme as PSMTheme } from "@psm/theme";

declare module "@emotion/react" {
  export interface Theme extends PSMTheme {}
}
