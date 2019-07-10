'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var noteSchema = Schema( {
  title: String,
  text: String,
  postdate: Date,
  commentcount: Number,
  textbook: String,

} );

module.exports = mongoose.model( 'Note', noteSchema );
