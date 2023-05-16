import React from "react";

export type CardProps = React.PropsWithChildren & {
  heading?: string;
  subtitle?: string;
  paragraph?: string;
  buttonLabel?: string;
};
