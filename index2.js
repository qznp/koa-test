const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  async function testAsync() {
    return "hi";
  }

  const result = testAsync();
  console.log(result);
});

app.listen(3000, function() {
  console.log("start!!!");
});
