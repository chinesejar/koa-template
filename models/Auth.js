const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  phone: {
    type: String,
    require: true
  }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
