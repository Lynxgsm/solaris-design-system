import { Meta, StoryFn } from "@storybook/vue3";
import { SolarisButton, Values } from "solaris-vue";

const { ColorSchemeValues, VariantValues, SizeValues } = Values;

const meta: Meta = {
  title: "Buttons/Button",
  component: SolarisButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      options: ColorSchemeValues,
      control: "select",
    },
    variant: {
      options: VariantValues,
      control: "select",
    },
    size: {
      options: SizeValues,
      control: "radio",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn = (args) => ({
  components: { SolarisButton },
  setup() {
    return { args };
  },
  template: '<SolarisButton v-bind="args">{{ args.default }}</SolarisButton>',
});

export const Default: StoryFn = Template.bind({});
Default.args = {
  default: "Button",
};

export const Supernova: StoryFn = Template.bind({});
Supernova.args = {
  ...Default.args,
  colorScheme: "supernova",
};

export const Cobalt: StoryFn = Template.bind({});
Cobalt.args = {
  ...Default.args,
  colorScheme: "cobalt",
};
