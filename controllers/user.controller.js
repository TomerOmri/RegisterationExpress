/**
 * Created by tomz on 29/03/2017.
 */
var User = require('mongoose').model('User');

exports.register = function(req, res){

    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err){
        if (err) {
            if (err.code == 11000)
                return res.json({success: false, message: " A user with that email already exists. "});
            else
                return res.send(err);
        } else {
            return res.json({ message: 'User created!' });
        }

    });
}