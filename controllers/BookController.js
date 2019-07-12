
'use strict';
const Book = require( '../models/Book' );
const Bookchapt = require( '../models/Bookchapt  ' );


exports.saveBook = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newBook = new Book(
   {
     bookname: req.body.bookname,
     bookchapt: req.body.bookchapt
   }
  )

  //console.log("skill = "+newSkill)

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
    .then( ( books ) => {
      console.log("in gatAllBooks")
      console.dir(books)
      res.render( 'books', {
        books:books, title:"Books"
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

// this displays all of the skills
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
