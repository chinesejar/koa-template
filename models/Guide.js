const {Schema, model, Types} = require('mongoose');

const GuideSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  collection: 'guide',
  autoIndex: true
});

const GuideModel = model('Guide', GuideSchema);

module.exports = GuideModel;
