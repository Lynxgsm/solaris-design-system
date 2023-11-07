import type { Meta, StoryFn } from "@storybook/vue3";
import { SolarisTypography, Values } from "solaris-vue";
const { TypographyVariantValues, FontWeightValues } = Values.default;

const meta = {
  title: "Typography",
  component: SolarisTypography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: TypographyVariantValues,
      control: "select",
    },
    weight: {
      options: FontWeightValues,
      control: "select",
    },
  },
} satisfies Meta<typeof SolarisTypography>;

export default meta;

const Template: StoryFn = (args) => ({
  components: { SolarisTypography },
  setup() {
    return { args };
  },
  template:
    '<SolarisTypography v-bind="args">{{ args.default }}</SolarisTypography>',
});

export const Default: StoryFn = Template.bind({});
Default.args = {
  default: "I am a title",
};
