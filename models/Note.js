'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var noteSchema = Schema( {
  header: String,
  text: String,
  postdate: Date,
  //commentcount: Number,
  textbook: String,
  page1: Number,
  page2: Number,

} );

module.exports = mongoose.model( 'Note', noteSchema );
