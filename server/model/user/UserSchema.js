const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  roles: Array,
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true}
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;