import type { Meta, StoryObj } from "@storybook/react";
import {
  defineCustomElements,
  SolarisButton,
} from "../../../../../packages/react-library";

defineCustomElements();

const meta = {
  title: "Buttons/Button",
  component: SolarisButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Supernova: Story = {
  args: {
    children: "Button",
    colorScheme: "supernova",
  },
};

export const Cobalt: Story = {
  args: {
    children: "Button",
    colorScheme: "cobalt",
  },
};

export const Comet: Story = {
  args: {
    children: "Button",
    colorScheme: "comet",
  },
};

export const NebulaBlue: Story = {
  args: {
    children: "Button",
    colorScheme: "nebula-blue",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    colorScheme: "danger",
    size: "xs",
  },
};

export const Black: Story = {
  args: {
    children: "Button",
    colorScheme: "black",
  },
};

export const White: Story = {
  args: {
    children: "Button",
    colorScheme: "white",
  },
};
