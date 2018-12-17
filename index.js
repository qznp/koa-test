const Koa = require("koa");

const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello";
});

app.listen(3000, function() {
  console.log("start!!!");
});
