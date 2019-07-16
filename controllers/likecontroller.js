'use strict';
const Note = require( '../models/Note' );
const axios = require('axios');
const util = require('util')
const User = require('../models/User');
const Like = require('../models/Like');
const Dislike = require('../models/Dislike');
const Book = require('../models/Book');
const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;
//var apikey = require('../config/apikey');
//console.dir(apikey)

exports.saveLikeOLD = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newLike = new Like(
   {
     user: req.body.googlename,
     like: req.body.like,
     noteid: req.body.noteid,
   }
 )


  console.dir(req.body)

   //console.log("skill = "+newSkill)
   newLike.save()
     .then( () => {
       console.log('noteid = '+req.body.noteid)
       res.redirect( '/showBook/'+req.body.bookid);
     } )
     .catch( error => {
       res.send( error );
     } );

 };
 exports.savedisLikeOLD = ( req, res ) => {
   //console.log("in saveSkill!")
   //console.dir(req)
   let newLike = new Like(
    {
      user: req.body.googlename,
      dislike: req.body.dislike,
      noteid: req.body.noteid,
      bookid: req.body.bookid
    }
  )


   console.dir(req.body)

    //console.log("skill = "+newSkill)
    newLike.save()
      .then( () => {
        console.log('noteid = '+req.body.noteid)
        console.log('likes = '+ Like.count)
        res.redirect( '/showBook/'+req.body.bookid);
      } )
      .catch( error => {
        res.send( error );
      } );

  };

  exports.saveLike = ( req, res ) => {
    console.log('in save like')
     Note.findOne({_id:req.body.noteid})
       .then( (note) => {
         if (note.likes.indexOf(req.user._id)== -1){
           note.likes.push(req.user._id)

           console.log('in if')
           console.log(note.likes[0])
         }
         console.dir('notelikes = '+ note.likes.length)
         console.dir('userid = '+ req.user._id)
         console.dir('bookid = '+ req.body.bookid)
         console.log(note.likes)

         note.save()
         .then( () => {
           res.redirect( '/showBook/'+req.body.bookid)
         })
         .catch( error => {
           console.log("Error: "+error)
           console.dir(error)
           res.send(error.message)
         })

       } )
       .catch( error => {
         console.log("Error: ")
         console.dir(error)
         res.send( error );
       } );

   };
