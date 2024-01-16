module.exports = {
  path: "/",
  method: "get",
  run: function (q, s) {
    s.sendFile(process.cwd() + "/pages/index.html");
  }
}