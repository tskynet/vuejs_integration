// Import & config
var express = require('express')
var cors = require('cors')
var hostname = 'localhost'
var port = 3000
var app = express() // create an instance of express

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Démarage du serveur
app.use(cors());


app.get('/', function(req, res){
  res.send('hello')
})
app.post('/add', function (req, res){
  var result = parseInt(req.body.number1) + parseInt(req.body.number2)
  console.log(req.params)
  res.json({
    result
  })
})

app.get('/add/:number1/:number2', function (req, res){
  var result = parseInt(req.params.number1) + parseInt(req.params.number2)
  console.log(req.params)
  res.json({
    result
  })
})

app.listen(port, hostname, function(){
  console.log('ready')
})
