import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Card, CardProps } from ".";

export default {
  title: "Components / Card",
  component: Card,
  argTypes: {
    heading: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    paragraph: { control: { type: "text" } },
    buttonLabel: { control: { type: "text" } },
  },
  args: {
    heading: "Heading SM",
    subtitle: "Subtitle SM",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer when an unknown printer took a galley of type and scrambled.",
    buttonLabel: "Button Label",
  },
} as Meta<CardProps>;

export const Default: StoryFn<CardProps> = (args) => <Card {...args} />;
