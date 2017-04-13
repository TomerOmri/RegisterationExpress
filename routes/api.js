/**
 * Created by I330971 on 4/13/2017.
 */

module.exports = function(app, passport){

    app.post('/register', function(req, res){
        user.register(req, res);
    });


}