var express = require('express'); //call express
var bodyParser = require('body-parser');
var app = express(); //define our app  using express

var mongoose   = require('mongoose');
var Bear     = require('./app/models/bear');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set our port

var router = express.Router(); 

// ROUTES FOR OUR API
//
router.get('/', function(req, res){
    res.json({message: 'hooray! welcome to our api'});
});
//more routes for our API will happen here
//REGISTER OUR ROUTES ----------------
app.use('/api', router);

router.route('/bears').post(function(){
    var bear = new Bear();
})

app.listen(port);
console.log('Magic happens on port ' + port);

var express = require('express');
