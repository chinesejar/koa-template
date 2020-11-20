const {Schema, model} = require('mongoose');

/**
 * Poi 数据库表
 * 
 * amap_id 高德地图点 ID
 * name 地名
 * district 所在区
 * adcode 区编码
 * location 点坐标，GeoJSON 格式
 * address 地址
 * typecode 类型编码，符合高德地图类型编码规则，详情查看以下链接
 * https://a.amap.com/lbs/static/amap_poicode.xlsx.zip
 */

const PoiSchema = new Schema({
  amap_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  adcode: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  address: {
    type: String
  },
  typecode: {
    type: String,
  },
}, {
  collection: 'guide',
  autoIndex: true
});

const PoiModel = model('Poi', PoiSchema);

module.exports = PoiModel;
