const koa = require("koa");
const Router = require("koa-router");
const app = new koa();
const router = new Router({
  // 前缀
  prefix: "/yanyan"
});

router
  .get("/", function(ctx, next) {
    ctx.body = "yanyan";
  })
  .get("/todo", (ctx, next) => {
    ctx.body = "todo";
  });
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, function() {
  console.log("3000");
});
