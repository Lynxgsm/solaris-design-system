import type { Meta, StoryObj } from "@storybook/react";
import { SolarisAlert, SolarisTypography } from "@solaris/react";

const meta = {
  title: "Messages/Alert",
  component: SolarisAlert,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
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
