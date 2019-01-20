module.exports = `
const initLc = () => {
  try {
    AV.init("j3TlSqBMjoXnrIrNYB5En5Y1-gzGzoHsz", "d2rWR1nq5chvzXzh3bSyB8ug");
  } catch (error) {}
}

const handleRouteChange = (() => {
  let preHref = "",
    nowHref = "";
  return () => {
    setInterval(() => {
      nowHref = window.location.origin + window.location.pathname;
      if (preHref === nowHref) return;

      let now = new Date().toTimeString();
      console.log("At", now, ", you visit", nowHref);
      preHref = nowHref;
      
      // google analysis
      ga("set", "page", nowHref);
      ga("send", "pageview");

      // mathjax
      render(); // 渲染数学公式
      
      // leancloud counter
      lcLog(window.location.pathname);
    }, 1000 / 60);
  };
})();

initLc();
handleRouteChange();
`;
