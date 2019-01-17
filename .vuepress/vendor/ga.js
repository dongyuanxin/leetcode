module.exports = `
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124601890-1"></script>
<script>
  window.addEventListener("load", () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-124601890-1");
    console.log("load ga successfully");
  });
  window.addEventListener("popstate", function() {
    console.log("test");
  });
</script>
`;
