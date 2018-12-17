const koa = require("koa");
const app = new koa();

app.use(async ctx => {
  // 当请求是get请求时，显示表单让用户填写
  console.log(ctx.url);
  if (ctx.url === "/" && ctx.method === "GET") {
    let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
    ctx.body = html;
    // 当请求是post请求时
  } else if (ctx.url === "/" && ctx.method === "POST") {
    ctx.body = "接收到请求";
    // 其他请求显示404页面
  } else {
    ctx.body = "<h1>404!</h1>";
  }
});

app.listen(3000, function() {
  console.log("start!!!");
});
