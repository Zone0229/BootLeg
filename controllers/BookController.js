'use strict';
const Book = require( '../models/Book' );

exports.saveBook = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newBook = new Book(
   {
     bookname: req.body.textbook,
     bookchapt: req.body.textbook,
   }
  )
  newBook.save()
    .then( () => {
      res.redirect( '/showBooks' );
    } )
    .catch( error => {
      res.send( error );
    } );
  };



// this displays all of the skills
exports.getAllBooks = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Book.find()
    .exec()
    .then( ( ratings ) => {
      console.log("in gatAllNotes")
      console.dir(books)
      res.render( 'Book', {
        books:books,title:"Books"
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

exports.getOneBook = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Book.findOne({_id:id})
    .exec()
    .then( ( book ) => {
      res.render( 'book', {
        book:book, title:"Book"
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

exports.getOneBookChapt = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Bookchapt.findOne({_id:id})
    .exec()
    .then( ( book ) => {
      res.render( 'bookchapter', {
        bookchapt:bookchapt, title:"Bookchapter"
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
