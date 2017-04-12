var mongoose = require('./config/mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    db = mongoose(),
    app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var user = require('./controllers/user.controller');

app.use('/assets', express.static(__dirname + '/public'));


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


