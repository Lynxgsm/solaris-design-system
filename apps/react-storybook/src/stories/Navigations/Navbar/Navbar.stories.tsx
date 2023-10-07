import { SolarisNavbar, defineCustomElements } from "@solaris/react";
import type { Meta, StoryObj } from "@storybook/react";

defineCustomElements();

const meta = {
  title: "Navigations/Navbar",
  component: SolarisNavbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisNavbar>;

const Children = () => <div>Logo</div>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Children />,
    position: "fixed",
  },
};
