/**
 * 攻略控制类
 */

const { GuideDto } = require("../services");
const { GuideValidator } = require("../validators");
var localizeZh = require('ajv-i18n/localize/zh');

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
    const {id} = ctx.params;
    const guide = await guideDto.findById(id);
    ctx.body = {
      hello: guide
    }
  }

  // 创建攻略
  static async create(ctx) {
    const valid = await GuideValidator(ctx.request.body);
    if (valid) {
      try {
        const data = await guideDto.create(ctx.request.body);
        ctx.body = {
          hello: data
        }
      } catch (err) {
        ctx.throw(400, err);
      }
    } else {
      localizeZh(GuideValidator.errors);
      ctx.body = GuideValidator.errors;
    }
  }
}

module.exports = GuideController;
