/**
 * 数据服务
 * 基类
 */

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
    return await this.Model.findOne({ _id });
  }

  async create(data) {
    return await this.Model.insert(data);
  }

  async deleteOne(where) {
    return await this.Model.deleteOne(where);
  }
}

module.exports = BaseDto;
