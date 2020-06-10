'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const forumSchema = Schema( {
  name: String,
  state: String,
  title: String,
  body: String
});

module.exports = mongoose.model('createPost',forumSchema);
