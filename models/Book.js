'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bookSchema = Schema( {
  textbook: String

} );

module.exports = mongoose.model( 'Book', bookSchema );
