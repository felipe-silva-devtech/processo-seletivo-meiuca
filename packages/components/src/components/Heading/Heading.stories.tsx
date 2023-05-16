import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Heading, HeadingProps } from ".";

export default {
  title: "Components / Heading",
  component: Heading,
  argTypes: {
    content: { control: { type: "text" } },
  },
  args: {
    content: "Heading SM",
  },
} as Meta<HeadingProps>;

export const Default: StoryFn<typeof Heading> = (args) => <Heading {...args} />;
