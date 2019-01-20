module.exports = `
const render = () => {
  const mathjaxConfig = {
    showProcessingMessages: false, //关闭js加载过程信息
    messageStyle: "none", //不显示信息
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
      displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
      skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
    },
    "HTML-CSS": {
      availableFonts: ["STIX", "TeX"], //可选字体
      showMathMenu: false //关闭右击菜单显示
    }
  };
  let mathjaxInterval = setInterval(() => {
    if (!window.MathJax) {
      console.log("not loaded");
      return;
    }
    window.MathJax.Hub.Config(mathjaxConfig);
    window.MathJax.Hub.Queue([
      "Typeset",
      MathJax.Hub,
      document.getElementById("app")
    ]);
    clearInterval(mathjaxInterval);
  }, 10);
};

document.addEventListener("DOMContentLoaded", render, false);
`;
