/**
 * 数据服务
 * 基类
 */

const { Types: {ObjectId} } = require("mongoose");

class BaseDto {

  constructor(Model) {
    this.Model = Model;
  }

  async findAll(where) {
    return await this.Model.find(where);
  }

  async findOne(where) {
    return await this.Model.findOne(where);
  }

  async findById(_id) {
    return await this.Model.findOne({ _id: ObjectId(_id) });
  }

  async create(data) {
    return await this.Model.create(data);
  }

  async deleteOne(where) {
    return await this.Model.deleteOne(where);
  }
}

module.exports = BaseDto;
