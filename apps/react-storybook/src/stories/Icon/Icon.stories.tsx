import { SolarisIcon, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Icon",
  component: SolarisIcon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "add-stamp",
    size: "md",
    variant: "regular",
  },
};
