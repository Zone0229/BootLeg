'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bookSchema = Schema( {
  title: String,
} );

module.exports = mongoose.model( 'Book', bookSchema );
