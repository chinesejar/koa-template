/**
 * 用户授权控制类
 */
const { UserDto } = require("../services");
const { AuthValidator } = require("../validators");
var localizeZh = require('ajv-i18n/localize/zh');

const userDto = new UserDto();

class AuthController {

  // 登录
  static async login(ctx) {
    const valid = await AuthValidator(ctx.request.body);
    if (valid) {
      try {
        const data = await userDto.create(ctx.request.body);
        ctx.body = {
          hello: data
        }
      } catch (err) {
        ctx.throw(400, err);
      }
    } else {
      localizeZh(AuthValidator.errors);
      ctx.body = AuthValidator.errors;
    }
  }

  // 注册
  static async register(ctx) {
    ctx.body = {
      hello: 'register'
    }
  }

  // 忘记密码
  static async forget(ctx) {
    ctx.body = {
      hello: 'forget'
    }
  }
}

module.exports = AuthController;
