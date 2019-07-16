'use strict';
const Note = require( '../models/Note' );
const axios = require('axios');
const util = require('util')
const Like = require('../models/Like')
const disLike = require('../models/Dislike')
//var apikey = require('../config/apikey');
//console.dir(apikey)

exports.saveNote = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newNote = new Note(
   {
     header: req.body.header,
     text: req.body.text,
     postdate: new Date().toLocaleDateString(),
     //commentcount: req.body.Number,
     textbook: req.body.textbook,
     page1: req.body.page1,
     page2: req.body.page2,
     bookid: req.body.bookid,
     likes: Like.count - disLike.count,
   }
 )

 console.dir(req.body)

  //console.log("skill = "+newSkill)
  newNote.save()
    .then( () => {
      console.log('bookid = '+req.body.bookid)
      res.redirect( '/showBook/'+req.body.bookid);
    } )
    .catch( error => {
      res.send( error );
    } );

};



// this displays all of the skills
exports.getAllNotes = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Note.find()
    .exec()
    .then( ( notes ) => {
      console.log("in gatAllNotes")
      console.dir(notes)
      res.render( 'notes', {
        notes:notes, title:"Notes", likes:likes
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
exports.getOneNote = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Note.findOne({_id:id})
    .exec()
    .then( ( note ) => {
      res.render( 'note', {
        note:note, title:"Note"
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
