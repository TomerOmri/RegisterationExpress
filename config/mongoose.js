/**
 * Created by tomz on 30/03/2017.
 */
var mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect('mongodb://localhost/myapp');
    require('../models/user.model');
    return db;
};