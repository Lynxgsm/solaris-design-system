import type { Meta, StoryObj } from "@storybook/react";
import { SolarisPill, Values } from "solaris-react";
const { SizeValues, MessageTypeValues } = Values.default;

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
      control: "input",
    },
    count: {
      control: "input",
    },
    position: {
      options: ["left", "right"],
      control: "select",
    },
    active: {
      control: "boolean",
    },
    type: {
      options: MessageTypeValues,
      control: "select",
    },
    size: {
      options: SizeValues,
      control: "select",
    },
    loading: {
      control: "boolean",
    },
  },
};
