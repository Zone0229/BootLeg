'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var likeSchema = Schema( {
  like: String,
  user: ObjectId,
  noteid: ObjectId,
} );

module.exports = mongoose.model( 'Like', likeSchema );
