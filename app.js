const Koa = require('koa');
const config = require('./config');
const routes = require('./routes');
const Database = require('./utils/db');
const { port } = config;
/**
 * 实例化 Koa
 */
const app = new Koa();

/**
 * 注册数据库
 */
const db = new Database();
db.connect();

/**
* 注册路由
*/
for (const route of routes)
  app.use(route.routes(), route.allowedMethods());

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

/**
 * 退出程序
 */
app.on('close', () => {
  db.disconnect();
})

module.exports = app;
