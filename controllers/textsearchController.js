'use strict';
const axios = require('axios');
const util = require('util')
//var apikey = require('../config/apikey');
//console.dir(apikey)
axios.defaults.headers.post['X-API-KEY'] = 'YOUR_REST_KEY' // for POST requests
const api_key = "9097a0c7f9cd2d30eef1b6b4b50b6127"
exports.findISBN = ( req, res ) => {


  axios.get(`https://api.dp.la/v2/items?q=*deling&api_key=9097a0c7f9cd2d30eef1b6b4b50b6127`)
    .then(function (response) {
      console.log(util.inspect(response))
      //console.dir(response.keys())
      const x = (response.data.docs[0].sourceResource);
      console.dir(x)
      res.send(x)
      //res.render('showbookinfo',response=response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
