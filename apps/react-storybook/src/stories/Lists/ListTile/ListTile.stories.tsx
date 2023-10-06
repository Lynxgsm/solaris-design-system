import { SolarisListTile, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Lists/ListTile",
  component: SolarisListTile,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisListTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "ListTile",
  args: {
    title: "My title",
    children: "Hello I am a Tile",
  },
};
