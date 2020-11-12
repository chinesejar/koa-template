/**
 * 攻略控制类
 */

const { GuideDto } = require("../services");

const guideDto = new GuideDto();

class GuideController {

  // 获取所有攻略
  static async list(ctx) {
    const guides = await guideDto.findAll();
    ctx.body = {
      hello: guides
    }
  }

  // 获取单个攻略
  static async get(ctx) {
    ctx.body = {
      hello: 'get'
    }
  }

  // 创建攻略
  static async create(ctx) {
    ctx.body = {
      hello: 'create'
    }
  }
}

module.exports = GuideController;
