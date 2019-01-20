module.exports = `
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

      ga("set", "page", nowHref);
      ga("send", "pageview");

      render(); // 渲染数学公式
    }, 1000 / 60);
  };
})();

handleRouteChange();
`;
