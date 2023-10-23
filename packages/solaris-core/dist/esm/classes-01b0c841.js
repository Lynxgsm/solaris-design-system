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

export { classes as c };

//# sourceMappingURL=classes-01b0c841.js.map