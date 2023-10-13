import type { Meta, StoryObj } from "@storybook/vue3";
import { SolarisButton, Values } from "@solaris/vue";
import type { ComponentProps } from "vue-component-type-helpers";

type PagePropsAndCustomArgs = ComponentProps<typeof SolarisButton>;

// const meta: Meta<PagePropsAndCustomArgs> = {
//   component: SolarisButton,
//   render: (args, { argTypes }) => ({
//     components: { SolarisButton },
//     props: Object.keys(argTypes),
//     template: `
//       <solaris-button v-bind="$props">
//         <span v-model:modelValue></span>
//       </solaris-button>
//     `,
//   }),
// };

const meta = {
  title: "Buttons/Button",
  component: SolarisButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      options: Values.ColorSchemeValues,
      control: "select",
    },
    variant: {
      options: Values.VariantValues,
      control: "select",
    },
    size: {
      options: Values.SizeValues,
      control: "radio",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof SolarisButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slot: "Hello from Vue",
  },
};
