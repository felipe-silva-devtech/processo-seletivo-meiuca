import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Shape, ShapeProps } from ".";
import { Heading } from "../Heading";

export default {
  title: "Components / Shape",
  component: Shape,
} as Meta<ShapeProps>;

export const Default: StoryFn<ShapeProps> = (args) => (
  <Shape {...args} width="300px" height="427px">
    <Heading>Content</Heading>
  </Shape>
);
