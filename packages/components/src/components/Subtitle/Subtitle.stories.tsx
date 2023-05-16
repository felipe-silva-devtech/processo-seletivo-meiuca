import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Subtitle, SubtitleProps } from ".";

export default {
  title: "Components / Subtitle",
  component: Subtitle,
  argTypes: {
    content: { control: { type: "text" } },
  },
  args: {
    content: "Subtitle SM",
  },
} as Meta<SubtitleProps>;

export const Default: StoryFn<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);
