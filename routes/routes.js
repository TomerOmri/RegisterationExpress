/**
 * Created by I330971 on 4/13/2017.
 */
var path = require ('path');

module.exports = function(app, passport){

    app.get('/', function(req, res){
        res.sendfile(path.join('public/views' + '/index.html'));
    });

    app.get('/login', function(req, res){
        res.sendfile(path.join('public/views' + '/login.html'));
    });




}