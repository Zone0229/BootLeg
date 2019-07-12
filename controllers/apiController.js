'use strict';
const axios = require('axios');
const util = require('util')
//var apikey = require('../config/apikey');
//console.dir(apikey)

exports.findBook = ( req, res ) => {

  axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.body.item)
  .then((result)=>{

    console.dir(result.data)
    //res.send(result.data)
    res.render("bookpage",{books:result.data.items,title:"books"})
  })
  .catch((error)=>{
    res.send("apitest error = "+error)
  })
}

exports.showOneBook = ( req, res ) => {

  axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.body.bookname)
  .then((result)=>{

    console.dir(result.data)
    //res.send(result.data)
    res.render("book",{books:result.data.items,title:"book"})
  })
  .catch((error)=>{
    res.send("apitest error = "+error)
  })
}
