import type { Meta, StoryObj } from "@storybook/react";
import { SolarisFlex, SolarisBlock } from "solaris-react";

const meta = {
  title: "Containers/Block",
  component: SolarisBlock,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Block",
  args: {
    children: (
      <SolarisFlex
        justifyContent="center"
        alignItems="center"
        style={{
          width: "150px",
          height: "150px",
          background: "#eee",
          border: "1px solid #3c3c3c",
        }}
      >
        Block
      </SolarisFlex>
    ),
    style: {
      width: "fit-content",
      height: "fit-content",
    },
  },
};
