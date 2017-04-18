/**
 * Created by I330971 on 4/13/2017.
 */
var path = require ('path');

module.exports = function(app, passport){

    app.get('/register', function(req, res) {
        res.sendFile(path.join(__dirname, './public/views', 'register.html'));
    });


}