
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var favStatesSchema = Schema( {
  state: String,
  userId: ObjectId
} );

module.exports = mongoose.model( 'FavStates', favStatesSchema);
