'use strict';
const BookRating = require( '../models/BookRating' );

exports.Book = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newBook = new Book(
   {
     textbook: req.body.textbook,
   }
  )


// this displays all of the skills
exports.getAll BookRatings = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  BookRating.find()
    .exec()
    .then( ( ratings ) => {
      res.render( 'History', {
        title:"History",ratings:ratings
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};