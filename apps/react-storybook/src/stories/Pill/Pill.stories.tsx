import type { Meta, StoryObj } from "@storybook/react";
import { SolarisPill } from "solaris-react";

const meta = {
  title: "Pill",
  component: SolarisPill,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Pill",
  args: {
    label: "Envoyé",
    count: 3,
    position: "left",
  },
  argTypes: {
    label: {
      control: "text",
    },
    count: {
      control: "number",
    },
    position: {
      options: ["left", "right"],
      control: "select",
      defaultValue: "right",
    },
    active: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
};
