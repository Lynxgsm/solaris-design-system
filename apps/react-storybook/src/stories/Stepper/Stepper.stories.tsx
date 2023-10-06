import { SolarisStepper, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Stepper",
  component: SolarisStepper,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Stepper",
  args: {
    steps: ["Step 1", "A Long Description Step 2", "My Step 3", "Step 4"],
  },
};
