import type { Meta, StoryObj } from "@storybook/react";
import {
  SolarisBlockquote,
  SolarisTypography,
  defineCustomElements,
} from "@solaris/react";

defineCustomElements();

const meta = {
  title: "Messages/Blockquote",
  component: SolarisBlockquote,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisBlockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Blockquote",
  args: {
    children: (
      <SolarisTypography colorScheme="black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        nihil voluptates reprehenderit numquam reiciendis est perferendis
        similique veritatis, earum repellat eius, sapiente, dignissimos modi?
        Magni nobis ipsam perspiciatis reiciendis possimus.
      </SolarisTypography>
    ),
    title: "It's a title",
    type: "info",
  },
};
