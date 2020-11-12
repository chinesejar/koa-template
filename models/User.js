const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    // 0 未知 1 男 2 女
    enum: [0, 1, 2],
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
}, {
  collection: 'user',
  autoIndex: true
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
