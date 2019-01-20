module.exports = `
const lcLog = pathname => {
  pathname = decodeURIComponent(pathname);

  let Counter = AV.Object.extend("Counter");
  let counter = new Counter();
  counter.set("visit_time", new Date().getTime().toString());
  counter.set("user_agent", window.navigator.userAgent);
  counter.set("identity_path", pathname);
  counter.set("more_info", JSON.stringify(window.location));

  let acl = new AV.ACL();
  acl.setPublicReadAccess(true);
  acl.setPublicWriteAccess(false);
  counter.setACL(acl);
  counter.save();
};
`;
