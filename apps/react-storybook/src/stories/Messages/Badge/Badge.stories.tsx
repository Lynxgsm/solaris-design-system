import { SolarisBadge, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Messages/Badge",
  component: SolarisBadge,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Badge",
  args: {
    children: "success",
  },
};
