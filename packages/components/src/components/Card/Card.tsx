import React from "react";

import { CardProps } from "./Card.types";

import { Shape } from "../Shape";
import { Heading } from "../Heading";
import { Subtitle } from "../Subtitle";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

export const Card: React.FC<CardProps> = ({
  children,
  heading,
  subtitle,
  paragraph,
  buttonLabel,
  ...props
}) => {
  return (
    <Shape width="357px" {...props}>
      {children ? (
        children
      ) : (
        <>
          <Heading marginBottom="stack.xxxs">{heading}</Heading>
          <Subtitle marginBottom="stack.xxs">{subtitle}</Subtitle>
          <Paragraph marginBottom="stack.sm">{paragraph}</Paragraph>
          <Button>{buttonLabel}</Button>
        </>
      )}
    </Shape>
  );
};
