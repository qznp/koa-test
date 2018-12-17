const koa = require("koa");
const app = new koa();

app.use(async ctx => {
  let url = ctx.request.url;
  ctx.body = url;
});
app.listen(3000, function() {
  console.log("3000");
});
