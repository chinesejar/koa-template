const routerV1 = require("./v1");
const routerAuth = require("./auth");

module.exports = [
  routerAuth,
  routerV1,
]
