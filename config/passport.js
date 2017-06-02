/**
 * Created by I330971 on 4/13/2017.
 */
var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user.model');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

}