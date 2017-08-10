'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const UserSchema = new Schema({
  name: String,
  password: String,
  email: String 
});

module.exports = mongoose.model('Users', UserSchema);