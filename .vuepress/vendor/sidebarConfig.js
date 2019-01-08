const fs = require("fs");
const path = require("path");

const intToStr = (i, bit = 3) => {
  let str = i.toString();
  let length = str.length;
  if (length === bit) return str;
  for (let i = 0; i < bit - length; ++i) {
    str = `0${str}`;
  }
  return str;
};

const sidebarConfig = (root, start = 0, end = 999) => {
  if (!fs.existsSync(root)) {
    return [];
  }
  try {
    let stats = fs.statSync(root);

    if (!stats.isDirectory()) {
      return [];
    }

    let result = [];
    for (let i = start; i <= end; ++i) {
      let parent = path.resolve(root, intToStr(i));
      if (!fs.existsSync(parent) || !fs.statSync(parent).isDirectory()) {
        continue;
      }
      let children = fs.readdirSync(parent);
      let index = children.findIndex(item => item === "README.md");
      index !== -1 && result.push(`/${intToStr(i)}/`);
    }

    return result;
  } catch (error) {
    return [];
  }
};

module.exports = sidebarConfig;
