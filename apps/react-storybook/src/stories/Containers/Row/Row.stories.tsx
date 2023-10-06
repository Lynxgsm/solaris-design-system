import type { Meta, StoryObj } from "@storybook/react";
import {
  SolarisRow,
  SolarisColumn,
  SolarisTypography,
  defineCustomElements,
} from "@solaris/react";

defineCustomElements();

const meta = {
  title: "Containers/Grid System",
  component: SolarisRow,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SolarisRow>;

export default meta;

type Story = StoryObj<typeof meta>;

const style = {
  height: "150px",
  background: "#eee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #3c3c3c",
};

export const Rows: Story = {
  args: {
    children: (
      <>
        <SolarisRow gap={30}>
          <SolarisColumn style={style}>
            <SolarisTypography variant="h6">
              SolarisColumn Auto
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style}>
            <SolarisTypography variant="h6">
              SolarisColumn Auto
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style}>
            <SolarisTypography variant="h6">
              SolarisColumn Auto
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style}>
            <SolarisTypography variant="h6">
              SolarisColumn Auto
            </SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
        <SolarisRow>
          <SolarisColumn col="lg" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 12</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col="xl" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 6</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="md" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 6</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
        <SolarisRow>
          <SolarisColumn col="md" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 5</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="md" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 5</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="md" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="sm" style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col="xs" style={style}>
            <SolarisTypography>SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
      </>
    ),
    gap: 20,
  },
};
