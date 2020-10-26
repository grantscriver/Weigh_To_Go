$(document).ready(function() {
  const loginUser = $('#login')

  const username = $('#username');
  const password = $('#password');

  loginUser.on('click', function (event){
    event.preventDefault();
    console.log('Button Clicked!');
    $.post('/api/login',{
      username: username.val(),
      password: password.val()
    }).then(function(){
      console.log('Success')
    })
  }
  )
});
/*//Capture user input
$(document).ready(function () {
  const loginUser = $('#login');

loginUser.on('click', function (event) {
  event.preventDefault();
  console.log("Add Info Clicked");

// loginUser does a post to our api/login route, and if successful, redirects them to the user dashboard
        $.post('/api/User', {
          username: username,
          password: password,
        }).then ( function () {
//A successful login sends the user to their dashboard
          window.location.replace('/dashboard');

          })
          .catch(function (err) {
            console.log(err);
          });
      
    });
  });
  */