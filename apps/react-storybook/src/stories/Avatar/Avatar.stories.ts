import type { Meta, StoryObj } from "@storybook/react";
import { defineCustomElements, SolarisAvatar } from "@solaris/react";

defineCustomElements();

const meta = {
  title: "Avatar",
  component: SolarisAvatar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ST",
  },
};
