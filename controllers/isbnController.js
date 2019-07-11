'use strict';
const axios = require('axios');
//var apikey = require('../config/apikey');
//console.dir(apikey)
axios.defaults.headers.post['X-API-KEY'] = 'YOUR_REST_KEY' // for POST requests

exports.findISBN = ( req, res ) => {


  axios.get('/https://api.isbndb.com/'+req.body.ISBN)
    .then(function (response) {
      console.log(response);
      res.send(response)
      //res.render('showbookinfo',response=response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
