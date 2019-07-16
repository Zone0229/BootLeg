'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var dislikeSchema = Schema( {
  dislike: String,
  user: String,
  noteid: ObjectId,
} );

module.exports = mongoose.model( 'disLike', dislikeSchema );
