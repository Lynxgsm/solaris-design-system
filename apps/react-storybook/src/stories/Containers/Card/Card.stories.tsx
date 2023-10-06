import type { Meta, StoryObj } from "@storybook/react";
import {
  SolarisBlock,
  SolarisButton,
  SolarisCard,
  SolarisFlex,
  SolarisTypography,
  defineCustomElements,
} from "@solaris/react";

defineCustomElements();

const meta = {
  title: "Containers/SolarisCard",
  component: SolarisCard,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Segment: Story = {
  args: {
    elevation: 1,
    children: (
      <SolarisFlex gap={24} justifyContent="space-between" alignItems="center">
        <SolarisBlock>
          <SolarisTypography variant="h6" style={{ marginBottom: "16px" }}>
            SolarisCard Block
          </SolarisTypography>
          <SolarisTypography style={{ maxWidth: "550px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            sit quidem, vero sapiente veritatis et id repellat quasi esse
            maxime, eos ab a, qui placeat iste veniam labore excepturi harum!
          </SolarisTypography>
        </SolarisBlock>
        <SolarisButton variant="outline" colorScheme="supernova" size="md">
          Click Me
        </SolarisButton>
      </SolarisFlex>
    ),
  },
};
