const ROOT = ".";

const sidebar = require("./vendor/sidebarConfig")(ROOT);
const mathjax = require("./vendor/mathjax");
const ga = require("./vendor/ga");
const routeListen = require("./vendor/routeListen");
const leancloud = require("./vendor/leancloud");

sidebar.splice(0, 0, "/about/");

module.exports = {
  head: [
    ["script", {}, ga],
    [
      "script",
      {
        type: "text/javascript",
        src:
          "https://cdn.jsdelivr.net/npm/leancloud-storage@3.11.1/dist/av-min.js"
      }
    ],
    [
      "script",
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
      }
    ],
    ["script", {}, leancloud],
    ["script", {}, mathjax],
    ["script", {}, routeListen]
  ],
  base: "/leetcode/",
  title: "Leetcod 解题报告",
  description: "Leetcode解题报告, 算法, 数据结构, 笔记, 面试, javascript",
  markdown: {
    toc: { includeLevel: [1, 2, 3] }
  },
  themeConfig: {
    activeHeaderLinks: false,
    repo: "dongyuanxin/leetcode",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    sidebar,
    nav: [
      { text: "🏠首页", link: "/" },
      { text: "💡介绍", link: "/about/" },
      { text: "👱抓我", link: "https://godbmw.com/" }
    ]
  }
};
