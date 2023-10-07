import {
  SolarisAvatar,
  SolarisDropdown,
  SolarisFlex,
  SolarisTypography,
  defineCustomElements,
} from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Components/Dropdown",
  component: SolarisDropdown,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisDropdown>;

const AvatarButton = (
  <SolarisFlex gap={10} alignItems="center" style={{ cursor: "pointer" }}>
    <SolarisAvatar variant="circle" backgroundColor="supernova">
      SS
    </SolarisAvatar>
    <SolarisFlex direction="column">
      <SolarisTypography weight="bold">Espace Client</SolarisTypography>
      <SolarisTypography variant="small">Stephanie</SolarisTypography>
    </SolarisFlex>
  </SolarisFlex>
);

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: {
    children: (
      <SolarisFlex
        gap={12}
        style={{ textAlign: "center" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <SolarisAvatar
          variant="circle"
          backgroundColor="supernova"
        ></SolarisAvatar>
        <SolarisFlex
          style={{ textAlign: "center" }}
          direction="column"
          alignItems="center"
        >
          <h5 style={{ fontSize: "16px" }}>Stéphanie Simon Le Saulx</h5>
          <SolarisTypography variant="small">
            stephpro@yopmail.com
          </SolarisTypography>
        </SolarisFlex>
      </SolarisFlex>
    ),
  },
};
