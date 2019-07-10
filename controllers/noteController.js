'use strict';
const Note = require( '../models/Note' );

exports.saveNote = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newNote = new Note(
   {
     title: req.body.String,
     text: req.body.String,
     postdate: req.body.Date,
     commentcount: req.body.Number,
     textbook: req.body.String,
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
