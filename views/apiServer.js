var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// APIS
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop',{ useMongoClient: true });

var Books = require('./models/books.js');
// Post Books
app.post('/books',function(req,res){
  var book = req.body;
  Books.create(book, function(err,books){
	if(err){
	  throw err;
	}
	res.json(books);
  })
  
});
// Get books

app.get('/books', function(req,res) {
  Books.find(function(err,books){
	if(err){
	  throw err;
	}
	res.json(books);
  })
});

// Delete Books

app.delete('/books/:_id', function(err,books){
  var query = {_id: req.params._id}
  Books.remove(query, function(err,books){
	if(err){
	  throw err;
	}
	res.json(books);
  })
})

app.listen(3001,function(err){
  if(err){
	return console.log(err);
  }
  console.log('App is listening on 3001 port');
})