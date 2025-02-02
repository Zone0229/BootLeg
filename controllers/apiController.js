'use strict';
const axios = require('axios');
const util = require('util')
const Book = require( '../models/Book' );
const Note = require( '../models/Note' );
//var apikey = require('../config/apikey');
//console.dir(apikey)

/*
It is safest to write the functions which pull out features of
the book in the controller and pass them into the ejs page
This handles the case of missing properties in the JSON for the
book.

Here is a link to the documentation about what is in a book
https://developers.google.com/books/docs/v1/reference/volumes

*/
const sadfaceImage = "images/disappointed-face_1f61e.png"

function authors(book){
  return (book.volumeInfo.authors || "no authors listed")
}

function thumbnail(book){
  if (book.volumeInfo.imageLinks){
    return book.volumeInfo.imageLinks.thumbnail || sadfaceImage
  } else {
    return sadfaceImage
  }
}
exports.findBook = ( req, res ) => {

  axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.body.item)
  .then((result)=>{

    console.dir(result.data)
    //res.send(result.data)
    res.render("bookpage",
         {books:result.data.items,
          title:"books",
          authors:authors,
          thumbnail:thumbnail})
  })
  .catch((error)=>{
    res.send("apitest error = "+error)
  })
}
exports.ShowOneBook = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Book.findOne({_id:id})
    .exec()
    .then( ( book ) => {
      Note.find({textbook:book.title})
      .then((notes) => {
        console.log("got notes")
        console.log(notes)
      res.render( 'book', {
        book:book, notes:notes, title:"Book"
      } )
    } )
  } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};

exports.saveBook = ( req, res ) => {
  let newBook = new Book(
   {
     title: req.body.title,
   }
 )

  newBook.save()
    .then( () => {
      var bookid = newBook._id;
      res.redirect( '/showBook/'+bookid );
    } )
    .catch( error => {
      res.send( error );
    } );

};
