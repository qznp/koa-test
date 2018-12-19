const koa = require("koa");

const app = new koa();

app.use(async ctx => {
  if (ctx.url === "/index") {
    ctx.cookies.set("name", "yanyan", {
      domain: "127.0.0.1", //写cookie所在域名
      path: "/index", //写cookie所在的路径
      maxAge: 1000 * 60 * 60 * 24, //cookie有效时长
      expires: new Date("2018-12-20"), //cookie失效时间
      httpOnly: false, //是否只用于HTTP请求中获取
      overwrite: false //是否允许重写
    });
    ctx.body = "cookie is ok";
  } else {
    if (ctx.cookies.get("name")) {
      ctx.body = ctx.cookies.get("name");
    } else {
      ctx.body = "cookie is none";
    }
  }
});
app.listen(3000, function() {
  console.log("3000");
});
