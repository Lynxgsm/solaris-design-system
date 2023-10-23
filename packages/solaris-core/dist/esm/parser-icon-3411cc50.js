import { h } from './index-88e70c1b.js';

const parseIcon = (icon) => {
  return typeof icon === 'string' ? h("solaris-icon", { name: icon, variant: "regular" }) : h("solaris-icon", { name: icon.name, variant: icon.variant, size: icon.size });
};

export { parseIcon as p };

//# sourceMappingURL=parser-icon-3411cc50.js.map