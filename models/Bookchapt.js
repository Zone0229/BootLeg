'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bookSchema = Schema( {
  number: Number,
} );

module.exports = mongoose.model( 'Book', bookSchema );
