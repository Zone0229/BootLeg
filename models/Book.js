'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var noteSchema = Schema( {
  header: String,
  text: String,
  postdate: Date,
  //commentcount: Number,
  textbook: String

} );

module.exports = mongoose.model( 'Note', noteSchema );
