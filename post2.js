const koa = require("koa");
const app = new koa();

app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    // 表单
    let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    let postdata = await parsePostData(ctx);
    ctx.body = postdata;
  } else {
    ctx.body = "<h1>404!</h1>";
  }
});
// 接收数据
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", data => {
        postdata += data;
      });
      ctx.req.addListener("end", function() {
        let postData = parseQueryStr(postdata);
        resolve(postData);
      });
    } catch (error) {
      reject(error);
    }
  });
}
// 解析数据
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split("=");
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}
app.listen(3000, function() {
  console.log("3000");
});
