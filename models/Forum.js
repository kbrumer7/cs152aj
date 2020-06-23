'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const forumSchema = Schema( {
  name: String,
  state: String,
  title: String,
  body: String,
  date: Date,
  userId: ObjectId
});

module.exports = mongoose.model('ForumT3',forumSchema);
