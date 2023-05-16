import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Paragraph, ParagraphProps } from ".";

export default {
  title: "Components / Paragraph",
  component: Paragraph,
  argTypes: {
    content: { control: { type: "text" } },
  },
  args: {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
} as Meta<ParagraphProps>;

export const Default: StoryFn<ParagraphProps> = (args) => (
  <Paragraph {...args} />
);
