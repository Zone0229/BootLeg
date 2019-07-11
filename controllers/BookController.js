'use strict';
const Book = require( '../models/Book' );
const Bookchapt = require( '../models/Bookchapt  ' );


exports.saveBook = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newBook = new Book(
   {
     bookname: req.body.bookname,     
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


exports.saveBookchapt = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newBookchapt = new Bookchapt(
   {
     number: req.body.number,
   }
  )

  //console.log("skill = "+newSkill)

  newBookchapt.save()
    .then( () => {
      res.redirect( '/showBookchapts' );
    } )
    .catch( error => {
      res.send( error );
    } );
};



// this displays all of the skills
exports.getAllBookchapts = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Bookchapt.find()
    .exec()
    .then( ( bookchapts ) => {
      console.log("in gatAllBookchapts")
      console.dir(bookchapts)
      res.render( 'bookchapts', {
        bookchapts:bookchapts, title:"Bookchapts"
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
exports.getOneBookchapt = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Bookchapt.findOne({_id:id})
    .exec()
    .then( ( bookchapt ) => {
      res.render( 'bookchapt', {
        bookchapt:bookchapt, title:"Bookchapt"
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
