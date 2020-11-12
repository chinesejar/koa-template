/**
 * 用户数据服务类
 */

const BaseDto = require("./Base");
const { UserModel } = require("../models");

class UserDto extends BaseDto {

  constructor() {
    super(UserModel);
  }

}

module.exports = UserDto;
