import type { Meta, StoryObj } from "@storybook/react";
import { SolarisButton, Values } from "@solaris/react";

const meta = {
  title: "Buttons/Button",
  component: SolarisButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      options: Values.ColorSchemeValues,
      control: "select",
    },
    variant: {
      options: Values.VariantValues,
      control: "select",
    },
    size: {
      options: Values.SizeValues,
      control: "radio",
    },
    fullWidth: {
      control: "boolean",
    },
  },
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
