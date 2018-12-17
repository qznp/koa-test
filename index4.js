const koa = require("koa");
const app = new koa();

app.use(async ctx => {
  function takeLongTime() {
    return new Promise(resolve => {
      setTimeout(() => resolve("longtime"), 1000);
    });
  }
  async function test() {
    const v = await takeLongTime();
    console.log(v);
  }
  test();
});

app.listen(3000, function() {
  console.log("服务");
});
