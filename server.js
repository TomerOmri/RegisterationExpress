
// ============================= INCLUDES ============================= //

var express  = require('express');

var port     = process.env.PORT || 3000;
var mongoose = require('./config/mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');



// ============================= CONFIGURATION ============================= //
var app = express();
var db = mongoose();


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session




var user = require('./controllers/user.controller');

// // BodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// // Set Static Folder
app.use('/', express.static(__dirname + '/public/views'));

app.get('/register', function(req, res) {
    res.sendFile('register.html', { root: '/public/views/'});
});


// ============================= ROUTS ============================= //

app.listen(port);













// var apiRouter = express.Router();
//
// apiRouter.use(function(req, res, next){
//     console.log('Somebody just came to our app!');
//
//     next();
// });
//
//
// apiRouter.get('/', function(req, res) {
//     res.json({message: 'hooray! welcome to our api!'});
// });
//
// app.use('/api', apiRouter);
//
//
// apiRouter.route('/register').post(function(req, res){ user.register(req, res); });
//
//
//
//
// // INDEX
// app.get('/', function(req,res){ res.sendfile('public/views/index.html'); });
//
// // REGISTER
// app.get('/register', function(req,res){ res.sendfile('public/views/register.html') });
// app.post('/register', function(req, res){ user.register(req, res); });
//
// // LOGIN
// app.get('/login', function(req,res){ res.sendfile('public/views/login.html') });
//
//
// var port = process.env.PORT | 3001;


module.exports = app;


