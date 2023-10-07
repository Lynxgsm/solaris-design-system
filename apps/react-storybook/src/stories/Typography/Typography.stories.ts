import { SolarisTypography, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Typography",
  component: SolarisTypography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisTypography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Typography",
  args: {
    variant: "p",
    children: "I am a Title",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Click me",
  },
};
