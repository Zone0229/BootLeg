'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bookSchema = Schema( {
  bookname: String,
  bookchapt: Number,
} );

module.exports = mongoose.model( 'Book', bookSchema );
