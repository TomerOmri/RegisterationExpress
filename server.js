
// ============================= INCLUDES ============================= //
// =============================
var mongoose = require('./config/mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');


// Init App
var db = mongoose(),
    app = express();

var user = require('./controllers/user.controller');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set Static Folder
app.use(express.static(__dirname + '/public'));


// ============================= ROUTING ============================= //
// =============================

var apiRouter = express.Router();

apiRouter.use(function(req, res, next){
    console.log('Somebody just came to our app!');

    next();
});


apiRouter.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

app.use('/api', apiRouter);


apiRouter.route('/register').post(function(req, res){ user.register(req, res); });




// INDEX
app.get('/', function(req,res){ res.sendfile('public/views/index.html'); });

// REGISTER
app.get('/register', function(req,res){ res.sendfile('public/views/register.html') });
app.post('/register', function(req, res){ user.register(req, res); });

// LOGIN
app.get('/login', function(req,res){ res.sendfile('public/views/login.html') });


var port = process.env.PORT | 3001;
app.listen(port);

module.exports = app;


