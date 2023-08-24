'use strict';
const clsx = require('clsx');

function themeCraft(themeObject) {
  const { base = [], variants = {}, defaultVariants = {} } = themeObject;

  return function (props) {
    const combinedProps = { ...defaultVariants, ...props };
    let result = [];

    for (const key in combinedProps) {
      const variant = variants[key];

      if (variant) {
        const value = variant[combinedProps[key]];
        if (value) {
          result.push(value);
        }
      }
    }

    return clsx(base, ...result, props?.class, props?.className);
  };
}

module.exports = themeCraft;
