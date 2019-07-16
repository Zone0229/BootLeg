'use strict';
const Note = require( '../models/Note' );
const axios = require('axios');
const util = require('util')
const User = require('../models/User');
const Like = require('../models/Like');
const Dislike = require('../models/Dislike');
const Book = require('../models/Book');
//var apikey = require('../config/apikey');
//console.dir(apikey)

exports.saveLike = ( req, res ) => {
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
     } )
     .catch( error => {
       res.send( error );
     } );

 };
 exports.savedisLike = ( req, res ) => {
   //console.log("in saveSkill!")
   //console.dir(req)
   let newLike = new Like(
    {
      user: req.body.googlename,
      dislike: req.body.dislike,
      noteid: req.body.noteid,
    }
  )


   console.dir(req.body)

    //console.log("skill = "+newSkill)
    newLike.save()
      .then( () => {
        console.log('noteid = '+req.body.noteid)
      } )
      .catch( error => {
        res.send( error );
      } );

  };
