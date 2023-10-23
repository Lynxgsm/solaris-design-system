import { h } from "@stencil/core";
export const parseIcon = (icon) => {
  return typeof icon === 'string' ? h("solaris-icon", { name: icon, variant: "regular" }) : h("solaris-icon", { name: icon.name, variant: icon.variant, size: icon.size });
};
//# sourceMappingURL=parser-icon.js.map
