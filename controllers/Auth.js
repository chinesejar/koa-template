/**
 * 用户授权控制类
 */

class AuthController {

  // 登录
  static async login(ctx) {
    ctx.body = {
      hello: 'login'
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
