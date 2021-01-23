
$('#send').click(function () { 

    if($('#Sign-Up').hasClass('show'))
        signUp();
    else
        logIn();
});


//Call

function signUp(){

    const data= {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        type: "POST",
        url: "/api/user/register",
        contentType:'application/json',
        dataType: "json",
        data:JSON.stringify(data),
        success: function (res) {
            location.href = "success.html?new=true&name="+data.name;
        },
        error: function(){
            alert('this email exist');
        }
    });
}

function logIn(){

    const data={
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        type: "POST",
        url: "/api/user/login",
        contentType:'application/json',
        dataType: "json",
        data:JSON.stringify(data),
        success: function (res) {
            location.href = "success.html?exist=true&name="+res.name+"&token="+res.user;
        },
        error: function(){
           alert('Password or Email Incorrect');
        }
    });
}



//FORM change module

$('#Log-In').click(function () { 
    $('#Sign-Up').removeClass('show');
    $(this).addClass('show');
    $('#name').css('display', 'none');
});

$('#Sign-Up').click(function () { 
    $('#Log-In').removeClass('show');
    $(this).addClass('show');
    $('#name').css('display', 'block');
});