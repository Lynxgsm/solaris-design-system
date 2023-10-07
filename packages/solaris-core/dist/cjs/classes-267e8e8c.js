'use strict';

const classes = (...cls) => {
  const arr = [];
  for (let cl of cls) {
    if (typeof cl === 'string')
      arr.push(cl);
    else if (cl) {
      const key = Object.keys(cl)[0];
      cl[key] && arr.push(key);
    }
  }
  return arr.join(' ');
};

exports.classes = classes;

//# sourceMappingURL=classes-267e8e8c.js.map