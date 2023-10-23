'use strict';

const index = require('./index-ca6d625d.js');

const parseIcon = (icon) => {
  return typeof icon === 'string' ? index.h("solaris-icon", { name: icon, variant: "regular" }) : index.h("solaris-icon", { name: icon.name, variant: icon.variant, size: icon.size });
};

exports.parseIcon = parseIcon;

//# sourceMappingURL=parser-icon-68e98c04.js.map