const ROOT = ".";

const sidebar = require("./vendor/sidebarConfig")(ROOT);
const mathjax = require("./vendor/mathjax");

sidebar.splice(0, 0, "/about/");

module.exports = {
  head: [
    [
      "script",
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
      }
    ],
    ["script", {}, mathjax]
  ],
  base: "/leetcode/",
  title: "GodBMW",
  description: "Just a demo to learn vuepress",
  markdown: {
    lineNumbers: true,
    // anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3] }
  },
  themeConfig: {
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
