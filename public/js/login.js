// loginUser does a post to our api/login route, and if successful, redirects them to the user dashboard
    function loginUser(username, password) {
        $.get('/api/User', {
          username: username,
          password: password,
        })
          .then(function () {
//A successful login sends the user to their dashboard
            window.location.replace('/dashboard');
          })
          .catch(function (err) {
            console.log(err);
          });
      }