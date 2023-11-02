import type { Meta, StoryObj } from "@storybook/react";
import { SolarisBlock, SolarisFlex, SolarisTypography } from "solaris-react";

const meta = {
  title: "Containers/Flex",
  component: SolarisFlex,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisFlex>;

export default meta;

type Story = StoryObj<typeof meta>;

const style = {
  width: "150px",
  height: "150px",
  background: "#eee",
  border: "1px solid #3c3c3c",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Flex: Story = {
  args: {
    children: (
      <>
        <SolarisBlock style={style}>
          <SolarisTypography variant="h1">1</SolarisTypography>
        </SolarisBlock>
        <SolarisBlock style={style}>
          <SolarisTypography variant="h1">2</SolarisTypography>
        </SolarisBlock>
        <SolarisBlock style={style}>
          <SolarisTypography variant="h1">3</SolarisTypography>
        </SolarisBlock>
        <SolarisBlock style={style}>
          <SolarisTypography variant="h1">4</SolarisTypography>
        </SolarisBlock>
        <SolarisBlock style={style}>
          <SolarisTypography variant="h1">5</SolarisTypography>
        </SolarisBlock>
      </>
    ),
    gap: 20,
    wrap: "wrap",
  },
};
