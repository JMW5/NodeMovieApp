var express = require('express');
var app = express();
var request = require('request');



app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('search');
})


app.get('/results', function(req, res){

  var searchTerm = req.query.search;

  request('http://omdbapi.com/?s=' + searchTerm, function(err, response, body){
    if (!err && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render('results', {data: data});
    }
  });
})







//Listening to Port 3000
app.listen(3000, function(){
  console.log('Listening on port 3000');
})
