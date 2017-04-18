/**
 * Created by tomz on 29/03/2017.
 */





$("#registerToPlatform").click(function(){

    var name = $("#name-text-input").val();
    var email = $("#userEmail").val();
    var pass = $("#userPass").val();


    var userData = {
        name: name,
        email: email,
        password: pass
    };

    $.ajax({
        url: '/register',
        contentType: "application/json",
        method: 'POST',
        data: JSON.stringify(userData),
        success: function(data){
            location.replace('/login')
        },
        error: function(data){
            console.log('err');
            var err = $('<div />').addClass('alert alert-danger').html('<strong>Oh snap!</strong> Something went wrong, please try again.').css("margin", "2% 0");
            $("#newsMsg").append(err);
        }
    })

});