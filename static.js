const koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new koa();

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  ctx.body = "hello";
});
app.listen(3000, function() {
  console.log("3000");
});
