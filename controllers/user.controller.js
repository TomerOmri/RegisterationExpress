/**
 * Created by tomz on 29/03/2017.
 */
var User = require('mongoose').model('User');


exports.register = function(req, res){

    console.log(req.body);

    var user = new User(req.body);
    user.save(function(err){
    });
    res.send("ok");
}