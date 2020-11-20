const {Schema, model, Types} = require('mongoose');

/**
 * Guide 数据库表
 * 
 * title 攻略标题
 * user 用户，外键
 * content 攻略介绍
 * routes 路线列表
 *  content 路线介绍
 *  pois 经过的点
 *   poi 点，外键
 *   content 点介绍
 *   images 点摄像列表
 */

const GuideSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  routes: [{
    content: {
      type: String,
    },
    pois: [{
      poi: {
        type: Types.ObjectId,
        ref: 'Poi',
        required: true,
      },
      content: {
        type: String,
      },
      images: {
        type: Array,
      }
    }]
  }],
  content: {
    type: String
  }
}, {
  collection: 'guide',
  autoIndex: true
});

const GuideModel = model('Guide', GuideSchema);

module.exports = GuideModel;
