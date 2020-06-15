'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stateSchema = Schema( {
  name: String,
  link: String
});

module.exports = mongoose.model('State',stateSchema);
