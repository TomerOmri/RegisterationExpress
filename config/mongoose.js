/**
 * Created by tomz on 30/03/2017.
 */
var mongoose = require('mongoose');

// Local
module.exports = function () {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect('mongodb://localhost/RegistrationExpress');
    require('../models/user.model');
    return db;
};


// // mLab
// module.exports = function () {
//     mongoose.Promise = global.Promise;
//     var db = mongoose.connect('mongodb://admin:TomRocket@ds159330.mlab.com:59330/registrationexpress');
//     require('../models/user.model');
//     return db;
// };