const koa = require("koa");
const app = new koa();

app.use(async ctx => {
  let url = ctx.url;
  // 从request中获取GET请求
  let request = ctx.request;
  let reqQuery = request.query;
  let reqQuerystring = request.querystring;
  // 从上下文中直接获取
  let ctxQuery = ctx.query;
  let ctxQuerystring = ctx.querystring;
  ctx.body = {
    url,
    reqQuery,
    reqQuerystring,
    ctxQuery,
    ctxQuerystring
  };
});

app.listen(3000, function() {
  console.log("服务！！！");
});
