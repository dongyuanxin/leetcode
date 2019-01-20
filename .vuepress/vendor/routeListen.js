module.exports = `
const handleRouteChange = (() => {
  let preHref = "";
  return () => {
    setInterval(() => {
      if (preHref === window.location.href) return;
      let now = new Date().toTimeString();
      preHref = window.location.href;

      ga("set", "page", preHref);
      ga("send", "pageview");
      console.log("refresh ga at", now);
      
      render(); // 渲染数学公式
      console.log("render mathjax at", now);
    }, 1000 / 60);
  };
})();

handleRouteChange();
`;
