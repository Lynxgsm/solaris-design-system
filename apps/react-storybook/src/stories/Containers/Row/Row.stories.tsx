import type { Meta, StoryObj } from "@storybook/react";
import {
  SolarisCard,
  SolarisColumn,
  SolarisRow,
  SolarisTypography,
} from "solaris-react";

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
          <SolarisColumn col={12} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 12</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col={6} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 6</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={6} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 6</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
        <SolarisRow>
          <SolarisColumn col={5} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 5</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={5} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 5</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col={4} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={4} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={4} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 4</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col={3} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={3} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={3} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={3} style={style}>
            <SolarisTypography variant="h6">SolarisColumn 3</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={2} style={style}>
            <SolarisTypography variant="p">SolarisColumn 2</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>

        <SolarisRow>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn col={1} style={style}>
            <SolarisTypography variant="p">SolarisColumn 1</SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
      </>
    ),
    gap: 20,
  },
};

export const Breakpoints: Story = {
  args: {
    children: (
      <>
        <SolarisRow>
          <SolarisColumn style={style} col={5} sm={12}>
            <SolarisTypography variant="h6">Col 5 / S 12</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style} col={5} sm={12}>
            <SolarisTypography variant="h6">Col 5 / S 12</SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style} col={2} md={6} sm={12}>
            <SolarisTypography variant="h6">
              Col 2 / M 6 / S 12
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style} col={2} md={6} sm={12}>
            <SolarisTypography variant="h6">
              Col 2 / M 6 / S 12
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style} col={6} md={2} sm={12}>
            <SolarisTypography variant="h6">
              Col 6 / M 2 / S 12
            </SolarisTypography>
          </SolarisColumn>
          <SolarisColumn style={style} col={6} md={2} sm={5}>
            <SolarisTypography variant="h6">
              Col 6 / M 2 / S 5
            </SolarisTypography>
          </SolarisColumn>
        </SolarisRow>
      </>
    ),
    gap: 20,
  },
};

export const Example: Story = {
  args: {
    children: (
      <>
        <SolarisRow gap={24}>
          <SolarisColumn col={12}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              <SolarisTypography variant="h5">
                SolarisTypography
              </SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
          <SolarisColumn col={8} md={12}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              <SolarisTypography variant="h5">
                SolarisTypography
              </SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
          <SolarisColumn md={12}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              SolarisTypography
              <SolarisTypography variant="h5"></SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
          <SolarisColumn md={12} col={4}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              <SolarisTypography variant="h5">
                SolarisTypography
              </SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
          <SolarisColumn md={12}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              <SolarisTypography variant="h5">
                SolarisTypography
              </SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
          <SolarisColumn md={12}>
            <SolarisCard elevation={4} style={{ ...style, border: "none" }}>
              <SolarisTypography variant="h5">
                SolarisTypography
              </SolarisTypography>
            </SolarisCard>
          </SolarisColumn>
        </SolarisRow>
      </>
    ),
    gap: 20,
  },
};
