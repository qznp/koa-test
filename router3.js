const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const router = new Router();

router.get("/", ctx => {
  ctx.body = ctx.query;
});

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("4000");
});
