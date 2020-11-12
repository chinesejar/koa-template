const mongoose = require('mongoose');
const config = require('../config');

/**
 * 数据库类
 */
class Database {

  // 连接
  async connect() {
    mongoose.connect(
      config.mongodb,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, (err) => {
        if (err) {
          console.error('数据库连接失败', err);
        } else {
          console.log('数据库连接成功');
        }
      }
    );
  }

  // 断开
  async disconnect() {
    await mongoose.disconnect();
  }
}

module.exports = Database;
