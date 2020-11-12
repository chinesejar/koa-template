/**
 * 攻略数据服务类
 */

const BaseDto = require("./Base");
const { GuideModel } = require("../models");

class GuideDto extends BaseDto {

  constructor() {
    super(GuideModel);
  }

}

module.exports = GuideDto;
