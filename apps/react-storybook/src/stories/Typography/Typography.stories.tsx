import type { Meta, StoryObj } from "@storybook/react";
import { SolarisTypography, Values } from "solaris-react";
const { TypographyVariantValues, FontWeightValues } = Values.default;

const meta = {
  title: "Typography",
  component: SolarisTypography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: TypographyVariantValues,
      control: "select",
    },
    weight: {
      options: FontWeightValues,
      control: "select",
    },
  },
} satisfies Meta<typeof SolarisTypography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Typography",
  args: {
    variant: "p",
    children: "I am a Title",
  },
  argTypes: {
    variant: {
      options: TypographyVariantValues,
      control: "select",
    },
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Click me",
  },
};
