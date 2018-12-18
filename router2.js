const koa = require("koa");
const Router = require("koa-router");
const app = new koa();

// 子层级
let home = new Router();
home
  .get("/yanyan", async ctx => {
    ctx.body = "home yanyan";
  })
  .get("/todo", async ctx => {
    ctx.body = "home todo";
  });

let page = new Router();
page
  .get("/yanyan", async ctx => {
    ctx.body = "page yanyan";
  })
  .get("/todo", async ctx => {
    ctx.body = "page todo";
  });

// 父级路由，装载所有子路由
let router = new Router();
router.use("/home", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, function() {
  console.log("4000");
});
