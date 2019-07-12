'use strict';
const Note = require( '../models/Note' );
const axios = require('axios');
const util = require('util')
//var apikey = require('../config/apikey');
//console.dir(apikey)
axios.defaults.headers.post['X-API-KEY'] = 'YOUR_REST_KEY' // for POST requests
const api_key = "9097a0c7f9cd2d30eef1b6b4b50b6127"

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
   }
 )

  //console.log("skill = "+newSkill)
  newNote.save()
    .then( () => {
      res.redirect( '/showNotes' );
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
        notes:notes, title:"Notes"
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
