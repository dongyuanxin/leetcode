const ROOT = ".";

const sidebar = require("./vendor/sidebarConfig")(ROOT);
sidebar.splice(0, 0, "/about");

module.exports = {
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
      { text: "💡介绍", link: "/about" },
      { text: "👱抓我", link: "https://godbmw.com/" }
    ]
  }
};
