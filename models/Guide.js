const mongoose = require('mongoose');

const GuideSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  }
});

const GuideModel = mongoose.model('guide', GuideSchema);

module.exports = GuideModel;
