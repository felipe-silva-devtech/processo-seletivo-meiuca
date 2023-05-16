import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  title: "Components / Button",
  component: Button,
  argTypes: {
    label: { control: { type: "text" } },
  },
  args: {
    label: "Button",
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;
