const koa = require("Koa");
const app = new koa();

app.use(async ctx => {
  async function testAsync() {
    return "Hello async";
  }
  function getSomething() {
    return "something";
  }
  async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
  }
  test();
});

app.listen(3000, function() {
  console.log("开始！！！");
});
